const jwt = require('jsonwebtoken');
const User = require('models/user');
const { JWT_SECRET } = require('config/keys');
const contactMe = require('services/mail');

signToken = user => {
  return jwt.sign({
    iss: 'NomadYong',
    sub: user.id,
    iat: new Date().getTime(), // current time
    exp: new Date().setDate(new Date().getDate() +1) // current time + 1 day ahead
  }, JWT_SECRET);
}

module.exports = {
    signUp: async (req, res, next) => {
      const { email, name, userName, password, profile_image } = req.value.body;

      // Check if there is a user with the same email
      const foundUser = await User.findOne({"email": email });
      if (foundUser) {
        return res.status(403).json({ error: 'Email is already in use'});
      }

      // Create a new user
      const newUser = new User({
          email: email,
          password: password,
          userName: userName,
          name: name,
          profile_image: profile_image,
          provider: 'LOCAL'
      });

      await newUser.save();

      // Generate the token
      const token = signToken(newUser);
      // Respond with token
      res.status(200).json({ newUser,token });
    },

    signIn: async(req, res, next) => {
      // Generate token
      const token = signToken(req.user);
      res.status(200).json({user: req.user.toJSON(), token: token});
    },

    googleOAuth: async (req, res, next) => {
      // Generate token
      const token = signToken(req.user);
      res.status(200).json({user: req.user.toJSON(), token: token});
    },

    facebookOAuth: async (req, res, next) => {
      // Generate token
      const token = signToken(req.user);
      res.status(200).json({user: req.user.toJSON(), token: token});
    },

    secret: async(req, res, next) => {
        console.log('UsersController.secret() called!');
        res.json({ secret: "resource" });
    },
    contact: async(req, res, next) => {
      const { name, fromEmail, subject, message } = req.body;
      await contactMe.sendContactMail(name, fromEmail, subject, message);
      res.status(200).json();
    }
}
