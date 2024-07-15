import React, { useState } from 'react'


const Header = () => {
  const[menuOpen,setmenuOpen]=useState(false);
  const[menuClose,setmenuClose]=useState(false);
  const openMenu=()=>{
    setmenuOpen(true);
   
  }
  const closeMenu=()=>{
    setmenuOpen(false);
  }
  return (
    <>
    <header>
        <div className="navContainer">
          <div className="logo-links">
            <div className="logo"><h1><span>V</span>aidik</h1></div>
            
            <ul className={menuOpen?'openmenu':'closemenu'}>
             
              <li><a className='active' href='#'>Home</a></li>
              <li><a href='#'>About</a></li>
              <li><a href='#'>Services</a></li>
              <li><a href='#'>Contact</a></li>
              <li><i className="fa-solid fa-xmark" onClick={closeMenu}></i></li>
             
            </ul>
            <i onClick={openMenu} className="fa-solid fa-bars"></i>
            

          </div>
          <div className="contact-us">
          <p className='phonenumber'><i className="fa-solid fa-phone"></i>(+977) 9855063247</p>
         
          
          

          </div>
        </div>
      </header>
      </>
  )
}

export default Header