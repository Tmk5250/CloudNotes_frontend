import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Notes } from "./components/Notes";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NoteState from "./Context/NoteState";
import Updatemodal from "./components/Updatemodal";
import UserState from "./Context/UserState";
import Project from "./components/Project";



function App() {

  return (
    <UserState>
    <NoteState>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
        <Route index element={<Home/>} />
          <Route exact path="notes" element={<Notes />}/>
        
        <Route exact path="notes/update" element={<Updatemodal/>} />
        <Route path="signup" element={<Signup />} />
        <Route path="Login" element={<Login />} />
        <Route path="project" element={<Project/>} />
        </Route>
      </Routes>
    </BrowserRouter>    
    </NoteState>
    </UserState>

  );
}

export default App;
