const router = require('express').Router();
const loginRoutes = require('./loginRoutes');
const newUser = require('./newUser.js')


router.use('/login', loginRoutes);
router.use("/dashboard", newUser);

module.exports = router;