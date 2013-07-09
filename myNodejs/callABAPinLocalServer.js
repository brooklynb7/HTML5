var http   = require('http'),
    config = {
		SERVER_HOST:                  '127.0.0.1',
		SERVER_PORT:                  8082,
		SERVER_RESPONSE_ALLOW_ORIGIN: '*',
		SERVER_RESPONSE_ALLOW_METHODS:'GET,PUT,POST,DELETE',
		SERVER_RESPONSE_ALLOW_HEADERS:'Origin, X-Requested-With, Content-Type, Accept',
		REQUEST_PROXY_HOST:           'proxy.pvgl.sap.corp',
		REQUEST_PROXY_PORT:           8080,
		REQUEST_PATH:                 'https://my013033.vlab.sapbydesign.com/sap/ap/ui/repository?saml2=disabled',
		REQUEST_METHOD:               'POST',
		REQUEST_HEADERS_HOST:         'my013033.vlab.sapbydesign.com',
		REQUEST_HEADERS_COOKIE:       'sap-ssolist=O2M9dmFjaXZvcV9WT1FfMDBfMDAy; sap-usercontext=sap-language=EN&sap-client=002; SAP_SESSIONID_VOQ_002=7Jr2ZvAGhTRmx5aFP2f2NNExejEn9xHis4QAFj4C1xg%3d; saplbVOQ=vacivoq_VOQ_00',
		HEADERS_CONTENT_TYPE:         'multipart/mixed; boundary=',
		HEADERS_CONTENT_BOUNDARY:     'SATBA'
	};

http.createServer(function(req,res){
	if(req.url === '/favicon.ico'){
		return;
	}

	res.setHeader('Access-Control-Allow-Origin', config.SERVER_RESPONSE_ALLOW_ORIGIN);
	res.setHeader('Access-Control-Allow-Methods', config.SERVER_RESPONSE_ALLOW_METHODS);
	res.setHeader('Access-Control-Allow-Headers', config.SERVER_RESPONSE_ALLOW_HEADERS);//,x-http-method-override

	if(req.method === 'POST'){		
		handleRequest(req,res);
	}
	else{
		console.log("Option Method Not Response\n");
		res.end();
	}

}).listen(config.SERVER_PORT,config.SERVER_HOST);
console.log('Server running at http://'+ config.SERVER_HOST +':'+ config.SERVER_PORT +'/');

var handleRequest = function(req,res){
	var content = '';
	
	var httpOptions = {
		host:    config.REQUEST_PROXY_HOST,
		port:    config.REQUEST_PROXY_PORT,
		path:    config.REQUEST_PATH,
		method:  config.REQUEST_METHOD,
		headers: {
		    'Host':         config.REQUEST_HEADERS_HOST,
		    'Cookie':       config.REQUEST_HEADERS_COOKIE,
		    'Content-Type': config.HEADERS_CONTENT_TYPE + config.HEADERS_CONTENT_BOUNDARY
		}
	};

	var httpRequest = http.request(httpOptions,function(httpRes){
		console.log("statusCode: ", httpRes.statusCode);
     	console.log("headers: ", httpRes.headers);
     	console.log('\n');

		httpRes.on('data', function(chunk){
			content += chunk;	
		});
		httpRes.on('end', function(){
			res.writeHead(httpRes.statusCode, {
				'Content-Length': content.length,
				'Content-Type':   config.HEADERS_CONTENT_TYPE + config.HEADERS_CONTENT_BOUNDARY
			});
			res.end(content);
		});
	});

	httpRequest.on('error', function(e) {
      console.error(e);
    });

    var postData = '';
	req.addListener('data', function(postDataChunk) {
        postData += postDataChunk;
    });
    req.addListener('end', function(){	    	
	    console.log(postData);
		httpRequest.write(postData);
		httpRequest.end();
    });
};