const HTTPStatus = require('http-status');

const Post = require('models/post');

const { ObjectId } = require('mongoose').Types;

module.exports = {
  createPost : async (req, res) => {
    try {
      const post = await Post.createPost(req.body, req.user._id);
      console.log(post);
      return res.status(HTTPStatus.CREATED).json(post.toJSON());
    } catch(e) {
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
  }
}
