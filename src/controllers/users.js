const jwt = require('jsonwebtoken');
const User = require('models/user');
const { JWT_SECRET } = require('config');

signToken = user => {
  return jwt.sign({
    iss: 'NomadYong',
    sub: user.id,
    iat: new Date().getTime(), // current time
    exp: new Date().setDate(new Date().getDate() +1) // current time + 1 day ahead
  }, JWT_SECRET);
}

module.exports = {
    signUp: async(req, res, next) => {
      const { email, password } = req.value.body;

      // Check if there is a user iwth the same email
      const foundUser = await User.findOne({ "local.email": email });
      if(foundUser) {
        res.status(403).send({ error: 'Email is already i use'});
      };

      // Create a new user
      const newUser = new User({
        method: 'local',
        local: {
          email: email,
          password: password
        }
      });
      await newUser.save();

      // Generate the token
      const token = signToken(newUser);

      // Respond with token
      res.json({ token });
    },

    signIn: async(req, res, next) => {
      // Generate token
      const token = signToken(req.user);
      res.status(200).json({ token });
    },

    googleOAuth: async (req, res, next) => {
      // Generate token
      const token = signToken(req.user);
      res.status(200).json({ token });
    },

    facebookOAuth: async (req, res, next) => {
      // Generate token
      const token = signToken(req.user);
      res.status(200).json({ token });
    },

    secret: async(req, res, next) => {
        console.log('UsersController.secret() called!');
        res.json({ secret: "resource" });
    },
}
