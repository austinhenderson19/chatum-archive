const router = require('express').Router();
const {
  getUserResources,
  getUserResourceById,
  createUserResource,
  updateUserResource,
  deleteUserResource,
} = require('../controllers/user.controller');

router.route('/').get(getUserResources).post(createUserResource);

router.route('/:id').get(getUserResourceById).put(updateUserResource).delete(deleteUserResource);

module.exports = router;
