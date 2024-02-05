import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signupUser = async(req, res) => {
    try {
        // *spread the data from req.body
        const { fullName, userName, password, confirmPassword, gender } = req.body;
        
        // *Confirm the password, if it does not match show error
        if(password !== confirmPassword){
            return res.status(400).json({error: "Password does not match"})
        }

        // *Otherwise, if the password is matched then check wheather there is any entry with the said username or not
        const user = await User.findOne({userName});
        
        // *If there is an entry, show error as it's an sigup function
        if(user){
            return res.status(400).json({error: "User already exists"})
        }

        // &Hash Password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        // *Profile pic of boy and girl
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

        // &as the User is a class of mongoose, newUser is a object witht the following constructor
        const newUser = new User({
            fullName,
            userName,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        });

        // *save the user in mongodb backend
        if(newUser){
            await newUser.save();

            res.status(200).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                userName: newUser.userName,
                profilePic: newUser.profilePic
            });
        }else{
            res.status(400).json({error:"Internal User data"});
        }
        
    } catch (error) {
        res.status(500).json({error:"Internal server error"});
    }
}

export const loginUser = (req, res) => {
    console.log("login user");
}

export const logoutUser = (req, res) => {
    console.log("login user");
}

