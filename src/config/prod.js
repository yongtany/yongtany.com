// prod.js - production keys here!!
module.exports = {
  JWT_SECRET : process.env.JWT_SECRET,
  mongoURI : process.env.MONGO_URI,
  facebookClientID: process.env.FACEBOOK_CLIENT_ID,
  facebookClientSecret: process.env.FACEBOOK_SECRET,
  googleClientID : process.env.GOOGLE_CLIENT_ID,
  googleClientSecret : process.env.GOOGLE_SECRET,
  cloudClientID: process.env.CLOUDINARY_API_KEY,
  cloudSecret: process.env.CLOUDINARY_SECERT,
};
