const express = require('express')
const {createUser,getUsers,getUser,updateUser,deleteUser} = require('../controller/usercontroller')
const route = express.Router()

route.post('/create', createUser)
route.get('/alluser',getUsers)
route.get('/user/:id',getUser)
route.put('/update/user/:id',updateUser)
route.delete('/delete/user/:id',deleteUser)


module.exports = route

