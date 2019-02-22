const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');

// The value passed to `done` here is stored on the session.
// We save the full user object in the session.
passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
// The value returned from `serializeUser` is passed in from the session here,
// to get the user. We save the full user object in the session.
passport.deserializeUser((user, done) => {
    done(null, user.id);
  });

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL:'/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleID: profile.id})
    .then((existingUser) => {
        existingUser ? done(null, existingUser) : new User({ googleId: profile.id }).save().then(user => done(null, user))
    })
}));
