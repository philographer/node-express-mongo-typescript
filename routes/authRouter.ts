/**
 * Created by yuhogyun on 2017. 2. 3..
 */

import * as passport from 'passport';

const AuthRouter = {
    login(req, res) {
        if (req.user) {
            res.status(307).redirect('/auth/success');
            return;
        }
        res.sendFile(__dirname + '/login.html');
    },
    success(req, res) {
        let user = req.user;
        res.status(200).json({msg: 'success login with ' + user.username});
    },
    fail(req, res) {
        res.status(200).json({msg: 'fail login'});
    }
};

export default AuthRouter;
