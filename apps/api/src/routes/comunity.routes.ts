import * as express from 'express';
import { CreateComunityController } from '../comunity/infrastructure/controller/createComunity.controller';

const comunityRouter = express.Router();

comunityRouter.post('/:id', async (req, res) => {
    await CreateComunityController.createComunity(req, res);
});

export { comunityRouter }