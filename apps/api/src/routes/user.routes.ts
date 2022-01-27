import * as express from 'express';
import { CreateUserController } from '../user/infrastructure/controllers/createUser.controller';
import { GetUserController } from '../user/infrastructure/controllers/getUser.controller';

const userRouter = express.Router();


userRouter.post('/createUser', async (req, res) => {
    CreateUserController.createUser(req);
    res.send("user was created")
});


userRouter.get('/getUserById', async (req, res) => {
    await GetUserController.getUserById(req, res);
});
    

export { userRouter }

