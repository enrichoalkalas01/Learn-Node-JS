let http = require('http');
let check_status_code = http.STATUS_CODES;
let check_method_code = http.METHODS;
let check_agent_code = http.Agent; // Berisi Function Node JS

let url = require('url');
let Router = require('routes'); // Module Routes
let Routes = Router();

Routes.addRoute("/", function(req, res) {
    res.writeHead(200,{"Content-Type": "text/plain"});
    res.end('Index Page');
});

// :name? = optional parameter
// :name = must use parameter
// Ketika optional parameter digunakan, kita bisa mengakses dengan parameter atau tanpa parameter
Routes.addRoute("/profile/:name?/:kota?", function(req, res) {
    res.writeHead(200,{"Content-Type": "text/plain"});
    res.end('Profile Page : ' + this.params.name + " From : " + this.params.kota);
});

http.createServer(function(req, res) {
    console.log(Routes);
    let path = url.parse(req.url).pathname;
    let match = Routes.match(path);

    if(match) {
        match.fn(req, res);
    } else {
        res.writeHead(200,{"Content-Type": "text/plain"});
        res.end();
    }
}).listen(8888);

console.log("Server Is Running.....");