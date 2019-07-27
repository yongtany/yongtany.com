const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  tags: [String],
  publishedDate: {
    type: Date,
    default: new Date() // 현재 날짜를 기본값으로
  },
  postImage: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  favoriteCount: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    required: false
  }
});

postSchema.methods = {
  toJSON() {
    return {
      _id: this._id,
      title: this.title,
      body: this.body,
      tags: this.tags,
      postImage: this.postImage,
      publishedDate: this.publishedDate,
      user: this.user,
      favoriteCount: this.favoriteCount,
      category: this.category
    };
  },
};
postSchema.index({
  title: "text",
  body : "text"
});

postSchema.statics = {
  createPost(args, user, postImage) {
    return this.create({
      ...args,
      user,
      postImage
    });
  },
};



module.exports = mongoose.model('Post', postSchema);
