/**
 * Copyright (c) 2016 timeros - project
 *
 * @author yuhogyun
 **/
"use strict";
/** External dependencies **/
/** Internal dependencies **/
const fileController_1 = require("./../controller/fileController");
class FileRouter {
    constructor() {
    }
    static upload(req, res) {
        fileController_1.default.parseForm(req).then((files) => {
            fileController_1.default.upload(files).then((result) => {
                res.status(200).json({ res: result });
            });
        }).catch((err) => {
            res.status(500).json({ res: err });
        });
    }
    static uploadPage(req, res) {
        res.sendFile('upload.html', { root: __dirname + '/../public/html' });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FileRouter;
