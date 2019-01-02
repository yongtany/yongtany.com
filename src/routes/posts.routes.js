const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('services/passport');

const { validateBody, schemas } = require('validations/validations');
const PostsControllers = require('controllers/posts');
const passportJWT = passport.authenticate('jwt', { session: false });


router.route('/')
  .post(passportJWT, validateBody(schemas.postSchema), PostsControllers.createPost);

router.route('/')
  .get(PostsControllers.getPostList);

router.route('/:id')
  .get(PostsControllers.getPostById);

module.exports = router;
