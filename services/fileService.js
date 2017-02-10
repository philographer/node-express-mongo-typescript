/**
 * Copyright (c) 2016 timeros -
 *
 * @author yuhogyun
 **/
"use strict";
/** External dependencies **/
var AWS = require('aws-sdk');
var fs = require('fs');
const formidable = require("formidable");
let form = new formidable.IncomingForm();
form.encoding = 'utf-8';
form.uploadDir = __dirname + '/../uploadedFiles/';
form.keepExtensions = true;
form.maxFieldsSize = 2 * 1024 * 1024; //default;
form.maxFields = 1000;
/** Internal dependencies **/
const config_1 = require("./../config");
/** CONFIGURATION ***/
AWS.config.region = config_1.default.AWS_REGION;
let s3 = new AWS.S3();
class UserService {
    constructor() {
    }
    static upload(files) {
        return new Promise((resolve, reject) => {
            let params = {
                Bucket: 'futsal-manager',
                Key: files.file.name,
                ACL: 'public-read',
                Body: require('fs').createReadStream(files.file.path)
            };
            s3.upload(params, function (err, data) {
                var result = '';
                if (err)
                    result = 'Fail';
                else
                    result = data.Location;
                resolve(result);
            });
        });
    }
    static parse(req) {
        form.on('progress', function (bytesReceived, bytesExpected) {
            // console.log('expected' + bytesExpected);
            // console.log('received' + bytesReceived);
        });
        return new Promise((resolve, reject) => {
            form.parse(req, function (err, fields, files) {
                if (err) {
                    reject(err);
                    return;
                }
                else {
                    resolve(files);
                }
            });
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UserService;
