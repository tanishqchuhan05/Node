import {registerUser, checkExistUser} from "../services/authService.js"


const register = async(req, res)=>{
    try{
        const {user_full_name, user_age, user_address, user_phone_number, user_email} = req.body
        if(!user_full_name || !user_age || !user_address || !user_phone_number || !user_email){
            return res.status(400).json({message: "All fields are required"})
        }

        const userExist = await checkExistUser(user_email);
        if(userExist){
            return res.status(403).json({message: "User already exist"})
        }
        const newUser = await registerUser(req.body);
        return res.status(200).json({message: "User created successfully", newUser})
    }catch(err){
        return res.status(500).json({message:"Something went wrong"})
    }
}



export default register;