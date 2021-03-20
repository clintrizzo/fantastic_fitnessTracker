const router = require('express').Router();
const apiRoutes = require('./api');
const loginRoutes = require('./loginRoutes');
const newUserRoutes = require('./newUserRoutes');
const cardioRoutes = require('./cardioRoutes');
const weightsRoutes = require('./weightsRoutes');

router.use('/api', apiRoutes);
router.use('./login', loginRoutes);
router.use('./newUser', newUserRoutes);
router.use('./cardio', cardioRoutes);
router.use('./weights', weightsRoutes);

module.exports = router;