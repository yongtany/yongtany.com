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

// Start the server
const port = process.env.PORT || 5000;

if(process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('yontany-frontend/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path= require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'yontany-frontend', 'build', 'index.html'));
  });
};


app.listen(port, err => {
  if(err) {
    throw err;
  } else {
    console.log(`
        --------------------------------
        Server runnging on port: ${port}
        --------------------------------
        `);
  }
});
console.log(`Server listening at ${port}`);
