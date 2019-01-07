const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  body: String,
  tags: [String],
  publishedDate: {
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

postSchema.methods = {
  toJSON() {
    return {
      _id: this._id,
      title: this.title,
      body: this.body,
      tags: this.tags,
      publishedDate: this.publishedDate,
      user: this.user.toJSON(),
      favoriteCount: this.favoriteCount,
    };
  },
};

postSchema.statics = {
  createPost(args, user) {
    return this.create({
      ...args,
      user,
    });
  },
};



module.exports = mongoose.model('Post', postSchema);
