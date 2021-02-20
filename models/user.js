const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    name: {
        type: String,
        trim: true,
    },
        email: {
            type: String,
            trim: true,
            required: "Enter an email address.",
        },
        password: {
            type: String,
            trim: true,
        },
   
        zipCode: {
            type: String,
            trim: true,
        },
    });
        userSchema.pre("save", function (next) {
            this.email = this.email.toLowerCase();
            next();
        }),
   

const User = mongoose.model("User", UserSchema);

module.exports = User;