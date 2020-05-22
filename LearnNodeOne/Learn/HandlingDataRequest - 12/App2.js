//  Untuk menggunakan server di node.js, kita harus menggunakan module bawaan dari node js.

// Basic Node JS
let http = require('http');
let check_status_code = http.STATUS_CODES;
let check_method_code = http.METHODS;
let check_agent_code = http.Agent; // Berisi Function Node JS

let fs = require('fs'); // Module Untuk Menampilkan File
let url = require('url'); // Module Untuk URL
let qString = require('querystring');

http.createServer(function(req, res) {
    console.log(req.url); // Check Request From URL

    let url_data = req.url;
    let code = 0;
    let file = "";
    let access = url.parse(req.url);

    if( access.pathname == '/') {
        
        code = 200;
        filename = 'index.html';
        file = './template/' + filename;

    } else if ( access.pathname == '/form' ) {
        
        code = 200;
        filename = 'form.html';
        file = './template/' + filename;

        if( req.method.toUpperCase() == "POST") {
            // Post
            let data_post = "";

            // Get Data Post
            req.on('data', function(chunk) {
                data_post += chunk;
            });

            req.on('end', function() {
                data_post = qString.parse(data_post); // Mengembalikan Data Berupa Object


                res.writeHead(code,{"Content-Type": "text/plain"});
                res.end(JSON.stringify(data_post)); // Dalam menampilkan data ke plain text, harus berbentuk string.
            });

            // res.writeHead(code,{"Content-Type": "text/plain"});
            // res.end("Request Post");

        } else { // Get
            res.writeHead(code,{"Content-Type": "text/html"});
            fs.createReadStream(file).pipe(res);
        }

    } else {
        code = 404;
        filename = '404.html';
        file = './template/' + filename;
        
        res.writeHead(code,{"Content-Type": "text/html"});
        fs.createReadStream(file).pipe(res);
    }

    
    // res.end();

}).listen(8888);

console.log("Server Is Running.....");