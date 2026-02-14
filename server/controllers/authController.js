import { User } from "../models/authModel.js";
import jwt from "jsonwebtoken";


const maxAge = 3 * 24 * 60 * 60 * 1000;

const createToken = ( email, userId ) => {
    return jwt.sign({ email, userId }, process.env.JWT_KEY, { expiresIn: maxAge })
};

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

async function login(rq, res){

    try{
        const { email, password } = req.body;

        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "Email and password is required!"
            });
        }

        const user = await User.findOne({
            email
        });

        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not registered!"
            });
        };

        const auth = await user.compare("password", user.password);

        if(!auth){
            return res.status(400).json({
                success: false,
                message: "Password is incorrect"
            });
        };

        res.cookie("jwt", createToken(email, user.id), {
            maxAge,
            secure: true,
            sameSite: "none"
        });

        return res.status(200).json({
            success: true,
            id: user.id,
            email: user.email,
            profileImage: user.profileImage,
            firstName: user.firstName,
            lastName: user.lastName,
            image: user.image,
            color: user.color,
            message: "Logged in successfully!"
        });
    } catch(e){
        return res.status(500).json({
            success: false,
            message: e.message
        });
    };
};

export {
    signup,
    login
}