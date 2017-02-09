/**
 * Copyright (c) 2016 timeros - Project
 *
 * @author yuhogyun
 **/
"use strict";
/** External dependencies **/
const express = require("express");
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
/** Mongoose Config **/
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/boilerplate');
const passport = require("passport");
const session = require("express-session");
let FacebookStrategy = require('passport-facebook').Strategy;
let LocalStrategy = require('passport-local').Strategy;
/** Intern al dependencies **/
const dbModel_1 = require("./services/dbModel");
const userService_1 = require("./services/userService");
const config_1 = require("./config");
// Todo : passport Configuration 파일 분할
passport.use(new FacebookStrategy({
    clientID: config_1.default.FACEBOOK_CLIENT_ID,
    clientSecret: config_1.default.FACEBOOK_CLIENT_SECRET,
    callbackURL: config_1.default.FACEBOOK_REDIRECT_URL
}, function (accessToken, refreshToken, profile, done) {
    console.log(profile);
    // Todo : Facebook auth 성공시 createOrUpdate
    // UserModel.findOneAndUpdate({username: '123'})
    /*
    User.findOrCreate(..., function(err, user) {
        if (err) { return done(err); }
        done(null, user);
    });
    */
}));
passport.use(new LocalStrategy(function (username, password, done) {
    dbModel_1.UserModel.findOne({ username: username }, function (err, user) {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
        }
        userService_1.default._verifyPassword(password, user.password).then(res => {
            if (!res)
                return done(null, false, { message: 'Incorrect password.' });
            return done(null, user);
        });
    });
}));
passport.serializeUser(function (user, done) {
    done(null, user);
});
passport.deserializeUser(function (id, done) {
    userService_1.default.readUser(id).then((user) => {
        done(null, user);
    }).catch((err) => {
        done(err, 'error');
    });
});
/** Internal dependencies **/
const index_1 = require("./routes/index");
let app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: config_1.default.SESSION_SECRET_KEY,
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index_1.default);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});
// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err['status'] || 500);
    res.render('error');
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = app;
