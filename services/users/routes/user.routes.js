const router = require('express').Router();
const {
  getUserResources,
  getUserResourceById,
  createUserResource,
  updateUserResource,
  deleteUserResource,
  verifyUserResource,
} = require('../controllers/user.controller');

router.use(verifyUserResource);

router.route('/').get(getUserResources).post(createUserResource);

router.route('/:id').get(getUserResourceById).put(updateUserResource).delete(deleteUserResource);

module.exports = router;
