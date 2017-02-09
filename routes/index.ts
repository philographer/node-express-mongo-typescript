/**
 * Copyright (c) 2016 timeros - Project
 *
 * @author yuhogyun
 **/

/** External dependencies **/
import * as express from 'express';
import * as passport from 'passport';

/** Internal dependencies **/
import UserRouter from './userRouter';
import MainRouter from './mainRouter';
import AuthRouter from './authRouter';
import AuthMiddleware from './../middleware/authMiddleware';

let router = express.Router();

router.get('/', MainRouter);

// User CRUD Logic
router.post('/auth/signup', UserRouter.create);
router.get('/user/:id', UserRouter.read); // Todo: Only dev test
router.put('/user/:id', UserRouter.update);
router.delete('/user/:id', UserRouter.delete); // Todo: Only dev test

// Auth Router
router.get('/auth/login', AuthRouter.login); // send facebook auth link
router.get('/auth/success', AuthMiddleware.userAuthenticated, AuthRouter.success); // success redirect for facebook auth
router.get('/auth/fail', AuthRouter.fail);
router.post('/auth/login', // local auth router
    passport.authenticate('local',
        {successRedirect: '/auth/success',
        failureRedirect: '/auth/fail',
        failureFlash: false })
);

// Facebook CRUD Logic
router.get('/auth/facebook', passport.authenticate('facebook'));
router.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect: '/auth/success',
        failureRedirect: '/auth/fail' }));


export default router;
