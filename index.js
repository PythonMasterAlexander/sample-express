import express from 'express';
import { routeHello, routeAPINames } from './routes.js';

const server = express();
const url = 'hello';
const port = 3000;

server.get(`/${url}`, function (req, res) {
  const response = routeHello(req, res);
  res.send(response);
});

server.get('/api/names', async function (req, res) {
  let response;
  try {
    response = await routeAPINames(req, res);
  } catch (error) {
    console.log(error);
  }
  res.send(response);
});

server.listen(port, function () {
  console.log(`Server running on http://localhost:${port}/${url}`);
});
