import mongoose from "mongoose";

const schema = mongoose.Schema;

const UserRegistration = new schema({
    firstName :{
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
},{timestamps: true});

const register = mongoose.model('registration', UserRegistration);

export default register;