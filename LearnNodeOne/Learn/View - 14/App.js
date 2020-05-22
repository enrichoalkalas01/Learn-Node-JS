let http = require('http');
let url = require('url');
let Router = require('routes');
let view = require('swig');

let router = Router();
let FooOne = function(req, res){
    res.writeHead(200,{"Content-Type": "text/plain"});
    res.end("Hello View");
};
 
router.addRoute("/", function(req, res){
    let html = view.compileFile('./view/index.html')({
        title: 'Index HTML',
        header: 'This Is Header'
    });

    res.writeHead(200,{"Content-Type": "text/html"});
    res.end(html);
});


router.addRoute('/view', FooOne);

http.createServer(function(req, res) {
    let path = url.parse(req.url).pathname;
    let match = router.match(path);

    if(match) {
        match.fn(req, res);
    } else {
        res.writeHead(404,{"Content-Type": "text/plain"});
        res.end('Page Not Found');
    }
}).listen(8888);

console.log("Server Is Running.....");