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
  },

  PostsList : async (req, res) => {
    // page가 주어지지 않았다면 1로 간주
    // query는 문자열 형태로 받아 오므로 숫자로 변환
    const page = parseInt(req.query.page || 1, 10);
    const { tag } = req.query;

    const query = tag ? {
      tags: tag // tags 배열에 tag를 가진 포스트 찾기
    } : {};

    // 잘못된 페이지가 주어졌다면 에러
    if (page < 1) {
      res.status = 400;
      return;
    }

    try {
      const posts = await Post.find(query)
        .sort({ _id: -1 })
        .limit(10)
        .skip((page - 1) * 10)
        .lean()
        .exec();
      const postCount = await Post.count(query).exec();
      const limitBodyLength = post => ({
        ...post,
        body: post.body.length < 350 ? post.body : `${post.body.slice(0, 350)}...`
      });
      req.body = posts.map(limitBodyLength);
      // 마지막 페이지 알려 주기
      // ctx.set은 response header를 설정해줍니다.
      res.set('Last-Page', Math.ceil(postCount / 10));
      return res.status(HTTPStatus.OK).json(posts);
    } catch (e) {
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
  }
}
