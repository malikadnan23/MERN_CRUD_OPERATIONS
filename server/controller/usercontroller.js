const User = require('../model/userModel')

const createUser =async (req, res) => {
    try {
        const newUser = new User(req.body)
        const { email } = newUser;

        const UserExist = await User.findOne({email})
        if (UserExist) {
          return  res.status(400).json({message:"User Already Exists"})
        }
        const savedData = await newUser.save()
        res.status(200).json({savedData})
    }
    catch(error) {
        res.status(500).json({errorMessage:error.message})
    }
}
const getUsers =async (req, res) => {
    try {
        const userData = await User.find()
        if (!userData || userData.length === 0) {
            return res.status(404).json({message:"User data not found"})
        }
        res.status(200).json(userData)
    }
    catch(error) {
        res.status(500).json({errorMessage:error.message})
    }
}

const getUser =async (req, res) => {
    try {
        const id = req.params.id
        const userExist = await User.findById(id)
        if (!userExist) {
            return res.status(404).json({message:"User does not exist"})
        }
        res.status(200).json(userExist)
    }
    catch(error) {
        res.status(500).json({errorMessage:error.message})
    }
}

const updateUser =async (req, res) => {
    try {
        
    }
    catch(error) {
        res.status(500).json({errorMessage:error.message})
    }
}

module.exports = {createUser,getUsers,getUser,updateUser}