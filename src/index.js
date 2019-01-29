const express = require('express');
const morgan  = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('config/keys');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Routes
app.use('/users', require('routes/users.routes'));
app.use('/posts', require('routes/posts.routes'));

// Ready to deploy
if(process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  const path= require('path');
  app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
  });
};


// Server start
app.listen(process.env.PORT || 5000, err => {
  if(err) {
    throw err;
  } else {
    console.log(`
        --------------------------------
        Server runnging on port: ${process.env.PORT || 5000}
        --------------------------------
        `);
  }
});
