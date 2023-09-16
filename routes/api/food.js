const express = require('express');

const router = express.Router();

const { validation, tryCatchWrapper, auth, upload } = require('../../middlewares');

const { getAllProductCategories } = require('../../controllers/products');

router.get('/', getAllProductCategories);

module.exports = router;


// всё, что закомментировано - можно удалять, это просто пример как было у нас в домашках
// const { authSchema } = require('../../models/user');
// const { users: ctrl } = require('../../controllers');

// router.post('/register', validation(authSchema.authRegisterSchema), tryCatchWrapper(ctrl.register));
// router.get('/verify/:verificationToken', tryCatchWrapper(ctrl.verifyEmail));
// router.post(
//   '/verify',
//   validation(authSchema.resendVerificationSchema),
//   tryCatchWrapper(ctrl.resendVerificationEmail)
// );

// router.post('/login', validation(authSchema.authLoginSchema), tryCatchWrapper(ctrl.login));

// router.get('/current', auth, tryCatchWrapper(ctrl.getCurrent));
// router.patch('/avatars', auth, upload.single('avatar'), tryCatchWrapper(ctrl.updateAvatar));
// router.patch(
//   '/',
//   auth,
//   validation(authSchema.subscriptionUpdateSchema),
//   tryCatchWrapper(ctrl.updateSubscription)
// );

// router.post('/logout', auth, tryCatchWrapper(ctrl.logout));