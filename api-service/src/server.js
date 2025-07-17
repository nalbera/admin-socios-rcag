import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import mainRouter from './router/index.js';


const server = express();

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

server.use(mainRouter);

export default server;