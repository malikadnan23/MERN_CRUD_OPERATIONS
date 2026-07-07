import { useState } from 'react'
import './adduser.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
const AddUser = () => {
  const users = {
    name: "",
    email: "",
    address:""
  }
  const [user, setUser] = useState(users)
  const inputHandler = (e) => {
    const { name, value } = e.target
    setUser({...user,[name]:value}) 
  }
  const submitForm =async (e) => {
    e.preventDefault()
   await axios.post()
  }
  return (
    <div className="adduser">
      <Link to="/" type="button" class="btn btn-dark"><i class="fa-solid fa-angle-left"></i> Go Back</Link>


      <h3>Add New User</h3>
      <form action="" className='AddUserForm' onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" onChange={inputHandler} autoComplete='off' placeholder="Enter your Name" required/>
        </div>
        <div className="inputGroup">
          <label htmlFor="name">Email</label>
          <input type="email" name="email" onChange={inputHandler} autoComplete='off' placeholder="Enter your Email" required/>
        </div>
        <div className="inputGroup">
          <label htmlFor="name">Address</label>
          <input type="text" name="address" onChange={inputHandler} autoComplete='off' placeholder="Enter your Address" required/>
        </div>
        <button type="button" class="btn btn-primary">Add New User</button>
      </form>
    </div>
  )
}

export default AddUser
