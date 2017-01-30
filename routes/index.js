/**
 * Copyright (c) 2016 timeros - Project
 *
 * @author yuhogyun
 **/
"use strict";
/** External dependencies **/
const express = require("express");
/** Internal dependencies **/
const userRouter_1 = require("./userRouter");
const mainRouter_1 = require("./mainRouter");
let router = express.Router();
router.get('/', mainRouter_1.default);
router.post('/user', userRouter_1.default.create);
router.get('/user/:id', userRouter_1.default.read);
router.put('/user/:id', userRouter_1.default.update);
router.delete('/user/:id', userRouter_1.default.delete);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
