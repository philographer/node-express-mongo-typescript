/**
 * Copyright (c) 2016 timeros - Project
 *
 * @author yuhogyun
 **/
"use strict";
/** External dependencies **/
/** Internal dependencies **/
const fileService_1 = require("./../services/fileService");
class FileController {
    constructor() {
    }
    static upload(file) {
        return fileService_1.default.upload(file);
    }
    static parseForm(req) {
        return fileService_1.default.parse(req);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FileController;
