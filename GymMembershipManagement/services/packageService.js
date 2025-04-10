import Package from "../models/packageModel.js"

const checkPackageExist = async(name)=>{
return await Package.findOne({package_type: name})
}

const addNewPackage = async (packageData)=>{
return await Package.create(packageData)
}


export {checkPackageExist, addNewPackage}