import * as express from 'express';
import bodyParser = require('body-parser');
import { userRouter } from './routes/user.routes'
import { comunityRouter } from './routes/comunity.routes'
import * as cors from 'cors'

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors())


app.use('/user', userRouter);
app.use('/comunity', comunityRouter);


const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
