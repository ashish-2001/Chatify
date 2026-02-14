import { User } from "../models/authModel";
import jwt from "jsonwebtoken";


const maxAge = 3 * 24 * 60 * 60 * 1000;

const createToken = ( email, userId ) => {
    return jwt.sign({ email, userId }, process.env.JWT_KEY, { expiresIn: maxAge })
}
async function signup(req, res){

    try{
        const { email, password } = req.body;

        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "Email and password is required!"
            });
        };

        const user = await User.create({
            email, 
            password
        });

        if(!user){
            return res.status(400).json({
                success: false,
                message: "User cannot bbe created!"
            });
        };

        res.cookie("token", createToken(email, user.id), {
            maxAge,
            secure: true,
            sameSite: "none"
        });

        return res.status(201).json({
            users: {
                id: user.id,
                email: user.email,
                profileSetup: user.profileSetup
            }
        });

    } catch(e){
        console.log(e);
        return res.status(500).json({message: "Internal server error"});
    }
}

export {
    signup
}