const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('services/passport');

const { validateBody, schemas } = require('validations/validations');
const UsersController = require('controllers/users');

router.route('/signup')
    .post(validateBody(schemas.authSchema), UsersController.signUp);

router.route('/signin')
    .post(UsersController.signIn);

router.route('/secret')
    .get(passport.authenticate('jwt', { session: false }), UsersController.secret);

module.exports = router;
