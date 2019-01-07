const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

// Create a schema
const userSchema = Schema({
  method: {
    type: String,
    enum: ['local', 'google', 'facebook'],
    required: true
  },
  local: {
    email: {
      type: String,
      lowercase: true
    },
    password: {
      type: String,
    },
    userName: {
      type: String,
    },
    profile_image: {
      type: String
    }
  },
  google: {
    id: {
      type: String
    },
    email: {
      type: String,
      lowercase: true
    },
    userName: {
      type: String,
    },
    profile_image: {
      type: String
    }
  },
  facebook: {
    id: {
      type: String
    },
    email: {
      type: String,
      lowercase: true
    },
    userName: {
      type: String,
    },
    profile_image: {
      type: String
    }
  }
});

userSchema.pre('save', async function(next) {
  try {
    if(this.method !== 'local'){
      next();
    }

    // Generate a salt
    const salt = await bcrypt.genSalt(10);

    // Generate a password hash (salt + hash)
    const passwordHash = await bcrypt.hash(this.local.password, salt);
    // Re-assign hashed version over original, plain text password
    this.local.password = passwordHash;
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods = {
  isValidPassword(password) {
    return bcrypt.compare(password, this.local.password);
  },
  toJSON() {
    return {
      _id: this._id,
      userName: this.local.userName || this.google.userName || this.facebook.userName,
      profile_image: this.local.profile_image || this.google.profile_image || this.facebook.profile_image,
    };
  },

}


// Create a model
const User = mongoose.model('User', userSchema);

// Export the model
module.exports = User;
