/**
 * Copyright (c) 2016 timeros -
 *
 * @author yuhogyun
 **/

/** External dependencies **/
var AWS = require('aws-sdk');
var fs = require('fs');
import formidable = require('formidable');

let form = new formidable.IncomingForm();
form.encoding = 'utf-8';
form.uploadDir = __dirname +'/../uploadedFiles/';
form.keepExtensions = true;
form.maxFieldsSize = 2 * 1024 * 1024; //default;
form.maxFields = 1000;




/** Internal dependencies **/
import CONFIG from './../config';


/** CONFIGURATION ***/
AWS.config.region = CONFIG.AWS_REGION;
let s3 = new AWS.S3();

export default class UserService {
    constructor() {

    }

    static upload(files) {
        return new Promise((resolve, reject) => {
            let params = {
                Bucket:'futsal-manager',
                Key:files.file.name,
                ACL:'public-read',
                Body: require('fs').createReadStream(files.file.path)
            };
            s3.upload(params, function(err, data){
                var result='';
                if(err)
                    result = 'Fail';
                else
                    result = data.Location;
                resolve(result)
            });
        });
    }

    static parse(req) {
        form.on('progress', function(bytesReceived, bytesExpected) {
            // console.log('expected' + bytesExpected);
            // console.log('received' + bytesReceived);
        });

        return new Promise((resolve, reject) => {
            form.parse(req, function(err, fields, files) {
                if(err){
                    reject(err);
                    return;
                } else{
                    resolve(files);
                }
            });
        })
    }
}
