/**
 * Created by yuhogyun on 2017. 2. 4..
 */
"use strict";
const AuthMiddleware = {
    userAuthenticated: function (req, res, next) {
        if (req.user) {
            next();
        }
        else {
            res.redirect('/login');
        }
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AuthMiddleware;
