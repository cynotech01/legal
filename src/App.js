import React, { useEffect, useState } from "react";
import "./assets/css/main.css"
import "./assets/css/style.css"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Blogabt from "./pages/Blogabt";
function App() {
 
const [langType,setLangType]=useState(false);
const statprop={langType,setLangType};
const currentUrl = window.location.href;
const urlObject = new URL(currentUrl);
const baseUrl = urlObject.origin;


useEffect(() => {
  console.log(baseUrl," ")
  console.log(currentUrl," ")
  if (currentUrl === `${baseUrl}/#team`) {
   
    const aboutSection = document.getElementById("team");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  }
}, [currentUrl, baseUrl]);
  return (
    <>
      <Router>
      <Navbar {...statprop}/>
      <section className="topNavbar">
        <Routes>
         
          <Route path='/' element={<Home {...statprop}/>} />
          <Route path='/about' element={<About {...statprop}/>} />
          <Route path='/services' element={<Services {...statprop}/>} />
          <Route path='/pricing' element={<Pricing {...statprop}/>} />
          <Route path='/contact' element={<Contact {...statprop}/>} />
          <Route path='/blog' element={<Blog {...statprop}/>} />
          <Route path='/blogabt' element={<Blogabt />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
        </section>
        <Footer {...statprop}/>
      </Router>
    </>
  );
}

export default App;
