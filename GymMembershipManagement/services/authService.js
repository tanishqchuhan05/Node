import User from "../models/userModel.js"

const registerUser = async (userData)=>{
    return await User.create(userData)
}
const checkExistUser = async(user_email)=>{
    return await User.findOne({user_email})
}

export {registerUser, checkExistUser} 