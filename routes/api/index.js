const router = require('express').Router();

const loginRoutes = require('./loginRoutes');
const newUserRoutes = require('./newUserRoutes');
const cardioRoutes = require('./cardioRoutes');
const weightsRoutes = require('./weightsRoutes');

router.use('/loginRoutes', loginRoutes);
router.use('/newUser', newUserRoutes);
router.use('/cardio', cardioRoutes);
router.use('/weights', weightsRoutes);

module.exports = router;