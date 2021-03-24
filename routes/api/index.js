const router = require('express').Router();
const loginRoutes = require('./loginRoutes');

router.use('/login', loginRoutes);

module.exports = router;