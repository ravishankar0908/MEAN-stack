import newUser from "../models/register.model.js"

export const AuthRegister = (req, res)=>{
    res.send("Register path worked successfully!");
}


export const UserRegistration = async (req , res)=>{
    try {
        const newuser = new newUser({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        });
        await newuser.save();
        return res.status(200).send(`registration successful: ${newuser}`);
    } catch (error) {
        return res.status(500).send(`Internal server error: ${error}`);
    }
}