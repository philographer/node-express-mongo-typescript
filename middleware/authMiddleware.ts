/**
 * Created by yuhogyun on 2017. 2. 4..
 */

const AuthMiddleware = {
    userAuthenticated: function(req, res, next) {
        if (req.user) {
            next();
        } else {
            res.redirect('/auth/login');
        }
    }
};

export default AuthMiddleware;
