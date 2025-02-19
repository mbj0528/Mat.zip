console.log('serverjs start');
var http = require('http');
var url = require('url');

function start(route, handle){
    function onRequest(request, response){
        var pathname = url.parse(request.url).pathname;
        console.log('request for ' + pathname + ' received.');

        route(handle, pathname, response);

        response.writeHead(200, {'Content-Type' : 'text/palin'});
        response.write('Hello World');
        response.end();
    }
    console.log('server has starting...');
    http.createServer(onRequest).listen(8888);

    console.log('server has started.');
}

exports.start = start;