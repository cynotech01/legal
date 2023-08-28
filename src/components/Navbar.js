import React, {useState,useEffect} from 'react'
import { Link ,Navigate, useNavigate} from 'react-router-dom'
import logoOfWebsite from "../assets/img/logoweb.jpg";
import lg1 from "../assets/img/LegalMatch-1 (1)_adobe_express.jpg"
import lg from "../assets/img/LegalMlogo (1).jpg"
// import lg from "../assets/img/xl.jpeg"
import eng from "../assets/img/eng.jpg"
import nfla from "../assets/img/nfla.jpg"
import uparr from "../assets/img/uparr.svg"
function Navbar(props) {
  const navigate=useNavigate();
    const [activeNavbar, setActiveNavbar]=useState("Home");
    const {langType,setLangType}=props;
    const homeClicked=()=>{
        setActiveNavbar("Home");
        if(window.innerWidth<1100)
        {
            setmobclick(!mobclick);
        }
      
    }
    const aboutClicked=()=>{
        setActiveNavbar("About");
        if(window.innerWidth<1100)
        {
            setmobclick(!mobclick);
        }
    }
    const servicesClicked=()=>{
        setActiveNavbar("Services");
        if(window.innerWidth<1100)
        {
            setmobclick(!mobclick);
        }
    }
    const pricingClicked=()=>{
        setActiveNavbar("Pricing");
        if(window.innerWidth<1100)
        {
            setmobclick(!mobclick);
        }
    }
    const contactClicked=()=>{
        setActiveNavbar("Contact");
        if(window.innerWidth<1100)
        {
            setmobclick(!mobclick);
        }
    }
    const blogClicked=()=>{
      setActiveNavbar("Blog");
      if(window.innerWidth<1100)
        {
            setmobclick(!mobclick);
        }
  }
  const [mobclick,setmobclick]=useState(true);
  const tooglemobClick=()=>{
    if(window.innerWidth<1100)
    {
        setmobclick(!mobclick);
    }
  }
  const hnadlelangChange=()=>{
    setLangType(!langType)
  }
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
       {/* <!-- ======= Header ======= --> */}
  <header id="header" className="header d-flex align-items-center fixed-top">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

      <Link to="/" className="NavbarLogo">
       
       {/* <img  src={logoOfWebsite} alt=""/><span className="webLogoName">LegalMatch</span> */}
      <span className="webLogoName"> <img  src={lg} alt=""/></span>
     
      </Link>

     {mobclick &&( <i className="mobile-nav-toggle mobile-nav-show bi bi-list" onClick={tooglemobClick}></i>)}
     {!mobclick &&( <i className="mobile-nav-toggle mobile-nav-show  bi bi-x" onClick={tooglemobClick}></i>)}
      <nav id="navbar" className={!mobclick? "navbar navmobb":"navbar"}>
        <ul>
          <li><Link to="/" className={activeNavbar==="Home"?"activeNavbar x":" x"} onClick={homeClicked}>{langType?`Home`:'Hjemme'} <img  className='arrowup' src={uparr} /></Link></li>
          <li><Link to="/about" className={activeNavbar==="About"?"activeNavbar x":"x"} onClick={aboutClicked}>{langType?`About`:'Om oss'}<img  className='arrowup' src={uparr} /></Link></li>
          <li><Link to="/services" className={activeNavbar==="Services"?"activeNavbar x":"x"} onClick={servicesClicked}>{langType?`Services`:'Tjenester'}<img  className='arrowup' src={uparr} /></Link></li>
          <li><Link to="/pricing" className={activeNavbar==="Pricing"?"activeNavbar x":"x"} onClick={pricingClicked}>{langType?`Pricing`:'Priser'}<img  className='arrowup' src={uparr} /></Link></li>
          <li><Link to="/blog" className={activeNavbar==="Blog"?"activeNavbar x":"x"} onClick={blogClicked}>{langType?`Blog`:'Blogg'}<img  className='arrowup' src={uparr} /></Link></li>
        
          <li><Link to="/#team" className={activeNavbar==="Home"?"activeNavbar x":"x"} onClick={homeClicked}>{langType?`Team`:'Lag'}<img  className='arrowup' src={uparr} /></Link></li>
          <li><Link to="/contact" className={activeNavbar==="Contact"?"activeNavbar x":"x"} onClick={contactClicked}>{langType?`Contact`:'Kontakt'}<img  className='arrowup' src={uparr} /></Link></li>
          <li><Link className={langType?" langcol":"langcol xd"}  onClick={hnadlelangChange}> {!langType?<><img  className='engImg' src={eng} /> <span className='wor'>English</span></>:<><img  className='engImg' src={nfla} /><span className='wor'>Norwegian</span></>}</Link></li>
         
        </ul>
      </nav>
      {/* <!-- .navbar --> */}
     
    </div>
  </header>
  {/* <span > <img  src={lg1} alt=""/></span> */}
 
    </>
  )
}

export default Navbar