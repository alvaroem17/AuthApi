const {
    Schema,
    model
} = require("mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (email) {
                const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                return emailRegex.test(email);
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    username: {
        type: String,
        required: true
    },
    name: {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        }
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }
})

const User = model("User", userSchema);

module.exports = User;