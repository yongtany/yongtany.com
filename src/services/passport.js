const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy  = require('passport-local').Strategy;
const GooglePlusTokenStrategy = require('passport-google-plus-token');
const { JWT_SECRET } = require('config');
const User = require('models/user');

// JSON WEB TOKENS STRATEGY
passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: JWT_SECRET
}, async (payload, done) => {
  try {
    // Find the user specified in token
    const user = await User.findById(payload.sub);

    // if user doesn't exists, handle it
    if(!user) {
      return done(null, false);
    }

    // Otherwise, return the user
    done(null, user);
  } catch (error) {
    done(error, false);
  }
}));

// GOOGLE OAUTH STRATEGY
passport.use('googleToken', new GooglePlusTokenStrategy({
  clientID: '354131151000-hbk8i0cg1gsi44knac314of73tbgrnoq.apps.googleusercontent.com',
  clientScret: 'u-9uZJcoeeBCNmRrJtc9y0oq'
}, async (accessToken, refreshToken, profile, done) => {
  try {
    console.log('accessToken', accessToken);
    console.log('refreshToken', refreshToken);
    console.log('profile', profile);

    // Check whether this current user exists in our DB
    const existingUser = await User.findOne({ "google.id": profile.id});
    if(existingUser) {
      console.log('User already exists in out DB');
      return done(null, existingUser);
    }

    console.log('User doesn\'t exists, we\'re creating a new one');

    // If new account
    const newUser = new User({
      method: 'google',
      google: {
        id: profile.id,
        email: profile.emails[0].value
      }
    });

    await newUser.save();
    done(null, newUser);

  } catch (error) {
    done(error, false, error.message);
  }
}));

// LOCAL STRATEGY
passport.use(new LocalStrategy({
  usernameField: 'email'
}, async (email, password, done) => {
  try {
    // Find the user given the email
    const user = await User.findOne({ "local.email": email });

    // If not, handle it
    if(!user) {
      return done(null, false);
    }

    // check if the password is correct
    const isMath = await user.isValidPassword(password);

    // If not, handle it
    if(!isMath) {
      return done(null, false);
    }

    // Otherwist, return the user
    done(null, user);
    } catch (error) {
      done(error, false);
    }
}));
