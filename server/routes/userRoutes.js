const express = require('express')
const {createUser,getUsers,getUser,updateUser} = require('../controller/usercontroller')
const route = express.Router()

route.post('/create', createUser)
route.get('/alluser',getUsers)
route.get('/user/:id',getUser)
route.get('/user/:id',updateUser)


module.exports = route

