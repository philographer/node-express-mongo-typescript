/**
 * Copyright (c) 2016 timeros - Project
 *
 * @author yuhogyun
 **/

/** External dependencies **/
import * as express from 'express';

/** Internal dependencies **/
import UserRouter from './userRouter';
import mainRouter from './mainRouter';

let router = express.Router();

router.get('/', mainRouter);

router.post('/user', UserRouter.create);
router.get('/user/:id', UserRouter.read);
router.put('/user/:id', UserRouter.update);
router.delete('/user/:id', UserRouter.delete);


export default router;
