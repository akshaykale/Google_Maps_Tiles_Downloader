const 
    urlToImage = require('url-to-image');

const BASE_URL = "http://mt1.google.com/vt/";
var lyrs = "lyrs=y"

if (process.argv.length <3 ){
    console.log("Error: => Usage: node index.js <zoom_level>");
}else{
    var zoom = process.argv[2];
    var total_tiles_to_download = (Math.pow(2,zoom) * Math.pow(2,zoom));

    var X = Y = Math.sqrt(total_tiles_to_download);

    for (var i=0; i< X; i++){
        for (var j=0; j< Y; j++){
            var name = lyrs + "&x=" + i + "&y=" + j + "&z=" + zoom;
            var url = BASE_URL + name;

            var options = {
                width: 256,
                height: 256,
                requestTimeout: 1000
            }

            urlToImage(url, name+".png", options).then(function() {
                //console.log("downloading... "+ name); 
            }).catch(function(err) {
                //console.error(err);
            });
        }
    }
}

