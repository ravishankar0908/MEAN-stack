import User from "../models/register.model.js"
import bcrypt from "bcrypt"

// inserting the new user into the database
export const UserRegistration = async (req , res)=>{
    try {
        const salt = await bcrypt.genSalt(12);
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        const newuser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashPassword
        });
        await newuser.save();
        return res.status(200).send(`registration successful: ${newuser}`); 
    } catch (error) {
        return res.status(500).send(`Internal server error: ${error}`);
    }
}

// Getting all the user details
export const Allusers = async (req, res)=>{
    try {
        const allUser = await User.find();
        return res.status(200).json(allUser);
    } catch (error) {
        return res.status(500).send(`Internal server error: ${error}`);
    }
}

// getting the specific user using the id
export const userById = async (req, res)=>{
    try {
        const user = await User.find({_id: req.params.id});
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).send(`Internal server error: ${error}`);
    }
}
