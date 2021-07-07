function view(response){
    console.log('request handler called --> view');
    response.writeHead(200, {'Content-Type' : 'text/palin'});
    response.write('Hello View');
    response.end();
}
function create(response){
    console.log('request handler called --> create');
    response.writeHead(200, {'Content-Type' : 'text/palin'});
    response.write('Hello Create');
    response.end();
}

var handle = {};
handle['/'] = view;
handle['/view'] = view;
handle['/create'] = create;

exports.handle = handle;