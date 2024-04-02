const router = require('express').Router();
const { login, register } = require('../controllers/auth.controller.js');


router.post('/login', login)
router.post('/signup', register)

module.exports = router