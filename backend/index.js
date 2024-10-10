require("dotenv").config();
const express = require("express");
const session = require('express-session');
const passport = require('passport');
const authRoutes = require('./Routes/auth');
const app = express();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

app.use(express.urlencoded({ extended: false }));

// Session setup
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false
  }));
  
  // Passport initialization
  require('./config/passport')(passport);
  app.use(passport.initialize());
  app.use(passport.session());
  
  // Routes
  app.use('/auth', authRoutes);
  
  // Protected route (example)
  app.get('/dashboard', authController.ensureAuthenticated, (req, res) => {
    res.send(`Welcome ${req.user.username} to the dashboard!`);
  });


app.listen(PORT, () => {
  console.log(`App is listening to ${PORT}`);
  mongoose.connect(uri);
  console.log("DB connected!")
});
