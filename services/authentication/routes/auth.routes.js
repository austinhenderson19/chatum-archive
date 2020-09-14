const router = require('express').Router();
const { authorize, verify } = require('../controllers/auth.controller');

router.route('/authorize').post(authorize);

router.route('/verify').post(verify);

module.exports = router;
