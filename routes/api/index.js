const router = require('express').Router();
const userRoutes = require('./loginRoutes');

router.use('/users', userRoutes);

module.exports = router;