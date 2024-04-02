const User = require("../models/user.model");

const getUsers = async (req, res) => {
    try {
        const users = await User.find({},{username:1, role:1});
        res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

const getOneUser = async (req, res) => {
    try {
        console.log(res.locals)
        const user = await User.findById(res.locals.user.id);
        res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};


module.exports = {
    getUsers,
    getOneUser
};
