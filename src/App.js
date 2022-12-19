import React from "react";
import NavBar from "./components/Header";
import Home from "./components/Home";
import Auth from "./components/Auth";
import News from "./components/News";
import Driver from "./components/Driver";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <hr></hr>
        <Auth />
        <br></br>
      </div>
      
   
      <Routes>
      
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/news" element={<News/>}></Route>
      <Route exact path="/drivers" element={<Driver />}></Route>
      </Routes>

    </Router>
   
  );
}

export default App;
