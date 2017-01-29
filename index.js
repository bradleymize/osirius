var http = require('http'),
  httpProxy = require('http-proxy'),
  _ = require('lodash'),
  portMapping = require('./ports');

var proxy = httpProxy.createProxyServer();

function hueProxy(req, res) {
  return proxy.web(req, res, {target: `http://localhost:${portMapping.hue}`});
}

function steamProxy(req, res) {
  return proxy.web(req, res, {target: `http://localhost:${portMapping.steam}`});
}

function processReferer(req, res) {
  if(req.headers.referer) {
    let refererParts = req.headers.referer.split("/");
    if(refererParts.length > 3) {
      let referer = refererParts[3];
      switch(referer) {
        case "hue": hueProxy(req, res); return;
        case "steam": steamProxy(req, res); return;
      }
    }
  }
  defaultResponse(req, res);
}

function defaultResponse(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('request successfully proxied to: ' + req.url + '\n' + JSON.stringify(req.headers, true, 2));
  res.end();
}

// Start the proxy server on port 80 and handle routing requests
http.createServer(function (req, res) {
  if(_.startsWith(req.url, "/hue")) {
    hueProxy(req, res, {target: 'http://localhost:3000'});
  } else if(_.startsWith(req.url, "/steam")) {
    steamProxy(req, res);
  } else {
    processReferer(req, res);
  }
}).listen(80);