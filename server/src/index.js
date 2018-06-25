import express from 'express';
import path from 'path';
import middleware from '../middleware';

const port = 4200;
const server = express();
const db = require('./database/index.js');

server.use(...middleware);

server.use(express.static(path.join(__dirname, '../../client/dist')));

server.listen(port, () => {
  console.log('Yeva\'s portfolio is listening on port:', port);
});

