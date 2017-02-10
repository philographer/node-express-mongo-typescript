/**
 * Copyright (c) 2016 timeros - project
 *
 * @author yuhogyun
 **/

/** External dependencies **/

/** Internal dependencies **/
import FileController from './../controller/fileController';

export default class FileRouter {
    constructor() {

    }

    static upload(req, res) {
        FileController.parseForm(req).then((files) => {
            FileController.upload(files).then((result) => {
                res.status(200).json({res: result});
            });
        }).catch((err) => {
            res.status(500).json({res: err});
        });
    }

    static uploadPage(req, res) {
        res.sendFile('upload.html', {root: __dirname +'/../public/html'});
    }
}
