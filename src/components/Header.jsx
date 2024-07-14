import React from 'react'

const Header = () => {
  return (
    <>
    <header>
        <div className="navContainer">
          <div className="logo-links">
            <div className="logo"><h1><span>V</span>aidik</h1></div>
            <ul>
              <li><a className='active' href='#'>Home</a></li>
              <li><a href='#'>About</a></li>
              <li><a href='#'>Services</a></li>
              <li><a href='#'>Contact</a></li>
            </ul>

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