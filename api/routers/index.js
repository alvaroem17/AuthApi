const router = require("express").Router()

router.use("/auth", require("./auth.router.js"));
router.use("/users", require("./user.router.js"));


module.exports = router;

