import * as express from 'express';
import { CreateUserController } from '../user/infrastructure/controllers/createUser.controller';
import { DeleteUserController } from '../user/infrastructure/controllers/deleteUser.controller';
import { GetUserController } from '../user/infrastructure/controllers/getUser.controller';
import { UpdateUserController } from '../user/infrastructure/controllers/updateUser.controller';
import { GetAllUsersController } from '../user/infrastructure/controllers/getAllUsers.controller';

const userRouter = express.Router();


userRouter.get('/all', async (req, res) => {
    await GetAllUsersController.getAllUsers(req, res);
});


userRouter.post('/:id', async (req, res) => {
    CreateUserController.createUser(req, res);
});


userRouter.get('/:id', async (req, res) => {
    await GetUserController.getUserById(req, res);
});
   

userRouter.delete('/:id', async (req, res) => {
    await DeleteUserController.deleteUserById(req);
    res.send("user was deleted")
});


userRouter.put('/:id', async (req, res) => {
    await UpdateUserController.updateUserById(req);
    res.send("user was updated")
});


export { userRouter }

