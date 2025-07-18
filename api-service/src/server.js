import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import mainRouter from './router/index.js';
import handleError from './errors/handleError.js';
import notFoundError from './errors/notFoundError.js';

const server = express();

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

server.use(mainRouter);

server.use(handleError);
server.use(notFoundError);

export default server;