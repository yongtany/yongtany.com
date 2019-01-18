const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

// const PROVIDER_ENUM = ['LOCAL', 'FACEBOOK', 'GOOGLE'];

// Create a schema
const userSchema = Schema({
    email: {
      type: String,
      lowercase: true
    },
    username: {
      type: String,
    },
    name: {
      type: String,
      required: true
    },
    password: {
      type: String,
    },
    profile_image: {
      type: String
    },
    provider: {
      type: String,
      required: true
    },
    uid: {
      type: String
    }
});

userSchema.pre('save', async function(next) {
  try {
    if(this.provider !== 'LOCAL'){
      next();
    }

    // Generate a salt
    const salt = await bcrypt.genSalt(10);

    // Generate a password hash (salt + hash)
    const passwordHash = await bcrypt.hash(this.password, salt);
    // Re-assign hashed version over original, plain text password
    this.password = passwordHash;
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods = {
  isValidPassword(password) {
    return bcrypt.compare(password, this.password);
  },
  toJSON() {
    return {
      _id: this._id,
      email: this.email,
      name: this.name,
      username: this.username,
      profile_image: this.profile_image
    };
  },
}


// Create a model
const User = mongoose.model('User', userSchema);

// Export the model
module.exports = User;
