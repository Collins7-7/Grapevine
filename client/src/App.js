import { useState, useEffect } from "react";
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  
  const user = false;


  return (
    <Router>
     <TopBar/>
       <Routes>
       <Route exact path="/" element={<Home/>} />
       <Route path="/signup" element={user? <Home/> : <Signup/>}>
       </Route>
       <Route path="/login" element={user? <Home/> : <Login/>}></Route>
       <Route path="/write" element={user? <Write/> : <Signup/>}></Route>
       <Route path="/settings" element={user? <Settings/> : <Signup/>}></Route>
       <Route path="/posts/:id" element={<Single/>}></Route>
       </Routes>
    </Router>
  );
}

export default App;
