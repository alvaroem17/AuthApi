const { getUsers,getOneUser } = require('../controllers/user.controller');
const { checkAuth } = require('../middleware');

const router = require('express').Router();


router.get('/all', getUsers)
router.get('/one', checkAuth ,getOneUser)

module.exports = router