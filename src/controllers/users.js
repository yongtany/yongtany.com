const User = require('../models/user');

module.exports = {
    signUp: async(req, res, next) => {
      const { email, password } = req.value.body;

      // Check if there is a user iwth the same email
      const foundUser = await User.findOne({ email });
      if(foundUser) {
        res.status(403).send({ error: 'Email is already i use'});
      };

      // Create a new user
      const newUser = new User({ email, password });
      await newUser.save();
      // Respond with token
      res.json({ user: 'created' });
    },

    signIn: async(req, res, next) => {
        // Generate token
    },

    secret: async(req, res, next) => {
        console.log('UsersController.secret() called!');
    },
}
