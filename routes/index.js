/**
 * Copyright (c) 2016 timeros - Project
 *
 * @author yuhogyun
 **/
"use strict";
/** External dependencies **/
const express = require("express");
const passport = require("passport");
/** Internal dependencies **/
const userRouter_1 = require("./userRouter");
const mainRouter_1 = require("./mainRouter");
const authRouter_1 = require("./authRouter");
const authMiddleware_1 = require("./../middleware/authMiddleware");
let router = express.Router();
router.get('/', mainRouter_1.default);
// User CRUD Logic
router.post('/auth/signup', userRouter_1.default.create);
router.get('/user/:id', userRouter_1.default.read); // Todo: Only dev test
router.put('/user/:id', userRouter_1.default.update);
router.delete('/user/:id', userRouter_1.default.delete); // Todo: Only dev test
// Auth Router
router.get('/auth/login', authRouter_1.default.login); // send facebook auth link
router.get('/auth/success', authMiddleware_1.default.userAuthenticated, authRouter_1.default.success); // success redirect for facebook auth
router.get('/auth/fail', authRouter_1.default.fail);
router.post('/auth/login', // local auth router
passport.authenticate('local', { successRedirect: '/auth/success',
    failureRedirect: '/auth/fail',
    failureFlash: false }));
// Facebook CRUD Logic
router.get('/auth/facebook', passport.authenticate('facebook'));
router.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/auth/success',
    failureRedirect: '/auth/fail'
}));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
