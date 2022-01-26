import * as express from 'express';
import bodyParser = require('body-parser');

import { createUserController } from './user/application/createUser.controller';


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get('/api', (req, res) => {
  res.send("greeting");
});


app.post('/api/user/createUser', (req, res) => {
  createUserController(req, res);
});



const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
