const HTTPStatus = require('http-status');
const multer = require('multer');

const Post = require('models/post');
const keys = require('config/keys');

const storage = multer.diskStorage({
  // destination: function(req, file, cb) {
  //   cb(null, './uploads/');
  // },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: 'djs4injum',
  api_key: keys.cloudClientID,
  api_secret: keys.cloudSecret
});

module.exports = {
  upload : multer({
    storage: storage,
    limits : {
      fileSize: 1024 * 1024* 5
    },
    fileFilter: fileFilter
  }),

  createPost : async (req, res) => {
    try {
      cloudinary.uploader.upload(req.file.path, async function(result) {
        req.body.postImage = result.secure_url;

        const post = await Post.createPost(req.body, req.user._id, req.body.postImage);

        return res.status(HTTPStatus.CREATED).json(post);
      });

    } catch(e) {
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
  },

  getPostList : async (req, res) => {
    // page가 주어지지 않았다면 1로 간주
    // query는 문자열 형태로 받아 오므로 숫자로 변환
    const page = parseInt(req.query.page || 1, 10);
    const { tag } = req.query;

    const query = tag ? {
      tags: tag // tags 배열에 tag를 가진 포스트 찾기
    } : {};

    // 잘못된 페이지가 주어졌다면 에러
    if (page < 1) {
      return res.status(HTTPStatus.BAD_REQUEST).json()
    }

    try {
      const posts = await Post.find(query)
        .sort({ _id: -1 })
        .limit(10)
        .skip((page - 1) * 10)
        .populate('user')
        .lean()
        .exec();
      const postCount = await Post.count(query).exec();
      const limitBodyLength = post => ({
        ...post,
        body: post.body.length < 200 ? post.body : `${post.body.slice(0, 200)}...`
      });
      // 마지막 페이지 알려 주기
      // res.set은 response header를 설정해줍니다.
      res.set('Last-Page', Math.ceil(postCount / 10));
      return res.status(HTTPStatus.OK).json(posts.map(limitBodyLength));
    } catch (e) {
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
  },

  getPostById: async (req, res) => {
    try{
      const post = await Post.findById(req.params.id).populate('user');

      if(!post) {
        return res.status(HTTPStatus.NOT_FOUND).json();
      }
      return res.status(HTTPStatus.OK).json(post);
    } catch(e) {
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
  },

  updatePost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);

      if (!post.user.equals(req.user._id)) {
        return res.sendStatus(HTTPStatus.UNAUTHORIZED);
      }

      Object.keys(req.body).forEach(key => {
        post[key] = req.body[key];
      });

      return res.status(HTTPStatus.OK).json(await post.save());

    } catch(e) {
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
  },

  deletePost: async (req, res) => {
    try{
      const post = await Post.findById(req.params.id);

      if (!post.user.equals(req.user._id)) {
        return res.sendStatus(HTTPStatus.UNAUTHORIZED);
      }

      await post.remove();
      return res.sendStatus(HTTPStatus.OK);
    } catch(e) {
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
  },

  tagList : async (req, res) => {
    try {
      const posts = await Post.find();
      const tagList = [];
    } catch(e) {
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
  },

  getRecentList : async (req, res) => {
    try {
      const recents = await Post.find()
        .sort({ _id: -1 })
        .limit(3)
        .populate('user')
        .lean()
        .exec();

      const limitBodyLength = post => ({
          ...post,
          body: post.body.length < 50 ? post.body : `${post.body.slice(0, 50)}...`
        });

        return res.status(HTTPStatus.OK).json(recents.map(limitBodyLength));
    } catch(e) {
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
  }
}
