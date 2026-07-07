import { Link } from "react-router-dom"
import './updateuser.css'

const UpdateUser = () => {
  return (
    <div>
      <div className="adduser">
      <Link to="/" type="button" class="btn btn-dark"><i class="fa-solid fa-angle-left"></i> Go Back</Link>
      <h3>Update Player</h3>
      <form action="" className='AddUserForm' >
        <div className="inputGroup">
          <label htmlFor="name">Name</label>
          <input type="text" name="name"  autoComplete='off' placeholder="Enter your Name" required/>
        </div>
        <div className="inputGroup">
          <label htmlFor="name">Email</label>
          <input type="email" name="email" autoComplete='off' placeholder="Enter your Email" required/>
        </div>
        <div className="inputGroup">
          <label htmlFor="name">Address</label>
          <input type="text" name="address" autoComplete='off' placeholder="Enter your Address" required/>
        </div>
        <button type="submit"  class="btn btn-primary">Update User</button>
      </form>
    </div>
    </div>
  )
}

export default UpdateUser
