const router = require('express').Router();
const authRoutes = require('./auth');
const userRoutes = require('./user');
const subRoutes = require('./subs');

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/subs', subRoutes);

module.exports = router;
