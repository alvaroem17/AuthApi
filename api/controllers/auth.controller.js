const User = require("../models/user.model");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
    try {
        console.log(req.body)
        const user = await User.findOne({
            email: req.body.email
        });
        if (!user) {
            return res
                .status(404)
                .json({
                    message: "User not found - Email incorrect "
                });
        }

        const isMatch = bcrypt.compareSync(req.body.password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid credentials"
            });
        }

        const token = jwt.sign({
            email: user.email,
            id: user._id
        }, process.env.SECRET, {
            expiresIn: "7d",
        });

        res.status(200).json({
            token,
            role: user.role
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

const register = async (req, res) => {
    const saltrounds = bcrypt.genSaltSync(parseInt(process.env.SALTROUNDS));
    const hashedPassword = bcrypt.hashSync(req.body.password, saltrounds);

    req.body.password = hashedPassword;

    try {
        const user = new User(req.body);
        await user.save();
        
        const token = jwt.sign({
            email: user.email,
            id: user._id
        }, process.env.SECRET, {
            expiresIn: "7d",
        });
        res.status(200).json({
            token,
            role: user.role
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    login,
    register
};