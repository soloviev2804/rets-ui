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
  proxy(process.env.FLOWABLE_URL || 'http://localhost:9977', {
    proxyReqOptDecorator(proxyReqOpts, srcReq) {
      const userName = process.env.FLOWABLE_ADMIN || 'rest-admin';
      const password = process.env.FLOWABLE_ADMIN_PASSWORD || 'test';
      proxyReqOpts.headers['Content-Type'] = 'application/json';
      proxyReqOpts.headers.Authorization = `Basic ${Buffer.from(`${userName}:${password}`).toString(
        'base64',
      )}`;
      // proxyReqOpts.method = 'GET';
      console.log('!!!!!proxyReqOpts', proxyReqOpts);
      return proxyReqOpts;
    },
    proxyReqBodyDecorator(bodyContent, srcReq) {
      const processDefinitionKey = process.env.PROCESS_DEFINITION_ID || 'acceleratorProcess';
      const body = JSON.parse(bodyContent.toString());
      const variables = Object.entries(body).map(([key, value]) => ({
        name: key,
        // type: 'string',
        value,
        // scope: 'global',
      }));
      const reqContent = {
        processDefinitionKey,
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
