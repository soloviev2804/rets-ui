/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const http = require('http');
const proxy = require('express-http-proxy');

const app = express();

// Point static path to dist
app.use('/', express.static(path.join(__dirname, '..', 'dist')));
app.use('/dist', express.static(path.join(__dirname, '..', 'dist')));
app.use(
  '/start-process',
  proxy('http://localhost:9977', {
    proxyReqOptDecorator(proxyReqOpts, srcReq) {
      proxyReqOpts.headers['Content-Type'] = 'application/json';
      // proxyReqOpts.method = 'GET';
      return proxyReqOpts;
    },
    proxyReqBodyDecorator(bodyContent, srcReq) {
      const processDefinitionId =
        process.env.PROCESS_DEFINITION_ID || 'myProcess:1:5003dac3-f479-11e8-8c65-0242ac130003';
      const body = JSON.parse(bodyContent.toString());
      const variables = Object.entries(body).map(([key, value]) => ({
        name: key,
        type: 'string',
        value,
        scope: 'global',
      }));
      const reqContent = {
        processDefinitionId,
        businessKey: 'rets',
        returnVariables: true,
        variables,
      };
      console.log(reqContent);
      return reqContent;
    },
  }),
);

const routes = require('./routes');

app.use('/', routes);

/** Get port from environment and store in Express. */
const port = process.env.PORT || '3000';
app.set('port', port);

/** Create HTTP server. */
const server = http.createServer(app);
/** Listen on provided port, on all network interfaces. */
server.listen(port, () => console.log(`Server Running on port ${port}`));
