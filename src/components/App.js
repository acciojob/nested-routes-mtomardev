
import React from "react";
import './../styles/App.css';
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Women from "./Women";
import Grooming from "./Grooming";
import Home from "./Home";
import Shirt from "./Shirt";
import Trouser from "./Trouser";
import Jewellery from "./Jewellery";

const App = () => {
  return (
    <main>
    <div>
        {/* Do not remove the main div */}
        <Navbar/>
        <Routes>
          <Route index path="/" element={<Home/>}/>
          <Route path="/women" element={<Women/>}>
          <Route path="Grooming" element={<Grooming/>}/>
          <Route path="Shirt" element={<Shirt/>}/>
          <Route path="Trouser" element={<Trouser/>}/>
          <Route path="Jewellery" element={<Jewellery/>}/> 
          </Route>
        </Routes>
        
    </div>
    </main>
  )
}

export default App
