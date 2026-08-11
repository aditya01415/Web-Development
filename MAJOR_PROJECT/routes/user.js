const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
const passport = require('passport');
const wrapAsync = require('../utils/wrapAsync.js');
const { saveRedirectUrl } = require('../middleware.js');

router.get('/signup', (req, res) => {
    res.render('users/signup'); 
});

router.post('/signup', async (req, res) => {
   try {
    let { email, username, password } = req.body;
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser);
    req.login(registeredUser, (err) => {
        if (err) {
            console.error(err);
            req.flash('error', 'Error logging in after signup. Please try logging in manually.');
            return res.redirect('/users/login');
        }
        req.flash('success', 'Welcome to Wanderlust!');
        return res.redirect('/listings');
    });
   } catch (err) {
    req.flash('error', err.message);
    res.redirect('/users/signup');
   }
});


router.get('/login', (req, res) => {
    res.render('users/login');
});

router.post('/login', saveRedirectUrl, passport.authenticate('local', { failureFlash: true, failureRedirect: '/users/login' }), (req, res) => {
    req.flash('success', 'Welcome back!');
    res.redirect(res.locals.redirectUrl || '/listings');
});

router.get('/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) {
            console.error(err);
            req.flash('error', 'Error logging out. Please try again.');
            return res.redirect('/listings');
        }
        req.flash('success', 'You have been logged out!');
        res.redirect('/listings');
    });
})

module.exports = router;