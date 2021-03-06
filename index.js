var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');
var keyGen = require('./randomGen');

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;
handle["/list"] = requestHandlers.list;

server.start(router.route, handle);

