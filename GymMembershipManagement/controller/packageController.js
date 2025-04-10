import { addNewPackage, checkPackageExist } from "../services/packageService.js";


const addPackage = async(req, res)=>{
    try{
        const {package_type, package_price, package_duration, package_discount, package_final_price} = req.body
        if(!package_type || !package_price || !package_duration || !package_discount || !package_final_price){
            return res.status(400).json({message: "All fields are required"})
        }

        const packExist = await checkPackageExist(package_type);
        if(packExist){
            return res.status(403).json({message: "Package already exist"})
        }

        const newPack = await addNewPackage (package_type)
        return res.status(200).json({message: "Package created successfully", newPack})
    }catch(err){
        return res.status(500).json({message:"Something went wrong"})
    }
}



export default addPackage