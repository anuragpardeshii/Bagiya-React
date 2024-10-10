const User = require('../models/User');
const passport = require('passport');

// Register a new user
exports.registerUser = async (req, res) => {
  const { name, username, email, password } = req.body;
  try {
    const userExists = await User.findOne({ username });
    if (userExists) {
      return res.status(400).send('Username already exists');
    }

    const newUser = new User({ name, username, email, password });
    await newUser.save();
    res.redirect('/login');
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

// Login user with Passport
exports.loginUser = passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/login',
  failureFlash: true
});

// Logout user
exports.logoutUser = (req, res) => {
  req.logout((err) => {
    if (err) { return res.status(500).send('Server Error'); }
    res.redirect('/login');
  });
};

// Middleware to ensure the user is authenticated
exports.ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};
