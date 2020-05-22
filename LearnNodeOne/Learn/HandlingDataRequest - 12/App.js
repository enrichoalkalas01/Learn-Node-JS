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

    console.log(access);

    if(access.pathname == '/') {

        // Index File
        code = 200;
        file = 'index.html';

    } else if (access.pathname == '/contact-us') {

        // Contact Us File
        code = 200;
        file = 'contact_us.html';

        let data = qString.parse(access.query);
        console.log(data);

        res.end();
    } else {

        code = 404;
        file = '404.html';

    }

    res.writeHead(code,{"Content-Type": "text/html"});
    fs.createReadStream('./template/' + file).pipe(res);

}).listen(8888);

console.log("Server Is Running.....");