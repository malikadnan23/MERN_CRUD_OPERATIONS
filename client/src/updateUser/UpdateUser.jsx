import { Link, useNavigate,useParams } from "react-router-dom"
import './updateuser.css'
import { useEffect, useState } from "react"
import axios from "axios"
import toast from "react-hot-toast"

const UpdateUser = () => {
  const navigate = useNavigate()
  const users = {
    name: "",
    email: "",
    address:""
  }
  const [user, setUser] = useState(users)
  const {id} = useParams()
  const inputHandler = (e) => {
    const { name, value } = e.target
    setUser({...user,[name]:value}) 
  }
  useEffect(() => {
    axios.get(`http://localhost:5000/api/user/${id}`)
      .then((res) => {
      setUser(res.data)
      })
      .catch((err) => {
      console.log(err)
    })
  },[id])
  const submitForm =async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:5000/api/update/user/${id}`, user)
      .then((res) => {
        console.log("user created successfully")
        toast.success(res.data.message,{position:'top-right'})
        navigate("/")
      })
      .catch((error)=>{
      console.log(error)
    })
  }
  return (
   
      <div className="adduser">
      <Link to="/" type="button" class="btn btn-dark"><i class="fa-solid fa-angle-left"></i> Go Back</Link>
      <h3>Update Player</h3>
      <form action="" className='AddUserForm' onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="name">Name</label>
          <input type="text" value={user.name} name="name" onChange={inputHandler}  autoComplete='off' placeholder="Enter your Name" required/>
        </div>
        <div className="inputGroup">
          <label htmlFor="name">Email</label>
          <input type="email" name="email" value={user.email} onChange={inputHandler} autoComplete='off' placeholder="Enter your Email" required/>
        </div>
        <div className="inputGroup">
          <label htmlFor="name">Address</label>
          <input type="text" name="address" value={user.address} onChange={inputHandler} autoComplete='off' placeholder="Enter your Address" required/>
        </div>
        <button type="submit"  class="btn btn-primary">Update Player</button>
      </form>
    </div>
  
  )
}

export default UpdateUser
