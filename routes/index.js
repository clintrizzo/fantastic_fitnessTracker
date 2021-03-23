const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./newUser');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;