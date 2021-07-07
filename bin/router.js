const { response } = require("express");
const { handle } = require("./requestHandler");

function route(handle, pathname, reponse){
    console.log('about to route a request for ' + pathname);
    if (typeof handle[pathname] === 'function'){
        handle[pathname](response);
    } else {
        console.log('no request handler found for ' + pathname);
        response.writeHead(404, {'Content-Type' : 'text/plain'});
        reponse.write('404 Not found');
        reponse.end();
    }
}

exports.route = route;