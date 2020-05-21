//  Untuk menggunakan server di node.js, kita harus menggunakan module bawaan dari node js.

// Basic Node JS
let http = require('http');
let check_status_code = http.STATUS_CODES;
let check_method_code = http.METHODS;
let check_agent_code = http.Agent; // Berisi Function Node JS

http.createServer(function(req, res) {
    console.log(req.url); // Check Request From URL

    res.writeHead(200,{"Content-Type": "text/plain"});
    res.write("Hello From Node JS \n");
    res.write("You Request : " + req.url);
    res.end();
}).listen(8888);

console.log("Server Is Running.....");