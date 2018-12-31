const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
  title: String,
  body: String,
  tags: [String],
  publishedDtate: {
    type: Date,
    default: new Date() // 현재 날짜를 기본값으로
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  favoriteCount: {
    type: Number,
    default: 0,
  },
});

modeuls.exports = monggose.model('Post', Post);
