import AddUser from "./addUser/AddUser";
import GetUser from "./getUser/GetUser";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UpdateUser from "./updateUser/UpdateUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <GetUser/>} />
        <Route path="/adduser" element={ <AddUser/>} />
        <Route path="/updateuser" element={ <UpdateUser/>} />

    </Routes>
      
    </BrowserRouter>
  );
}

export default App;
