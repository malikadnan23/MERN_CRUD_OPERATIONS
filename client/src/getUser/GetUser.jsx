import { useEffect, useState } from 'react'
import './getuser.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
const GetUser = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response =await axios.get("http://localhost:5000/api/alluser") 
                setUsers(response.data)
            } catch (error) {
                console.log("Error:",error )
            }
        }
        fetchdata()
    }, [])
    const deleteUser = async (userId) => {
        await axios.delete(`http://localhost:5000/api/delete/user/${userId}`)
            .then((res) => {
                setUsers((prevUser) => prevUser.filter((user) => user._id !== userId))
                toast.success(res.data.message, { position: 'top-right' })
            })
        
            .catch((error)=>{
            console.log(error)
        })
    }
  return (
      <div className="usertable">
       <Link to="/adduser"><button type="button" class="btn btn-primary">Add User <i class="fa-solid fa-user"></i></button></Link>   
          {users.length === 0 ? (
              <div className='noData'>
                  <h2>No Data to Display</h2>
                  <p>Please Add Some Users</p>
              </div>
          ): (
             <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
                  {
                      users.map((user,index) => {
                          return (
                              <tr>
                            <th scope="row">{index+1}</th>
                                  <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.address}</td>
      <td><Link to={'/updateuser'}><i class="fa-solid fa-pen-to-square"></i></Link>  | <i onClick={()=>deleteUser(user._id)} class="fa-solid fa-trash"></i></td>
    </tr>
                          )
                      })
                 }
    
  
  </tbody>
</table>     
     ) }
     
          
    </div>
  )
}

export default GetUser
