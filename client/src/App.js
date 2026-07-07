import AddUser from "./addUser/AddUser";
import GetUser from "./getUser/GetUser";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <GetUser/>} />
        <Route path="/adduser" element={ <AddUser/>} />

    </Routes>
      
    </BrowserRouter>
  );
}

export default App;
