import React, { useState } from 'react'

const Footer = () => {
  const [Name,setName]=useState('');
  const [Email,setEmail]=useState('');
  const [Message,setMessage]=useState('');
  const handleSubmit=()=>{
    event.preventDefault();
   fetch('http://localhost:2010/api/contact',{
    method:'POST',
    body:JSON.stringify({Name,Email,Message}),
    headers:{
      'Content-Type':"application/json"
    }
   });

  }
  return (
    <>
  <footer>
      <div id="contact">
        <div class="container">
          <div class="row">
            <div class="contact-left">
              <h1 class="sub-title">Contact Us</h1>
              <p><i class="fa-solid fa-paper-plane"></i>vaidiksuppliers@gmail.com</p>
              <p><i class="fa-solid fa-phone"></i>9855063247</p>
              <div class="social-icons">
                <a href="https://www.facebook.com/profile.php?id=100009225623804"><i class="fab fa-facebook"></i></a>
                <a href="https://www.linkedin.com/in/kapil-bhattarai-727525198/"><i class="fab fa-linkedin"></i></a>
                <a href="https://www.instagram.com/_kapil_bhattarai_/"><i class="fab fa-instagram"></i></a>
                <a href="https://x.com/i/flow/login"><i class="fab fa-twitter"></i></a>
              </div>
              
            </div>
            <div class="contact-right">
              <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
                <input type="text" name="Name" placeholder="Your Name" onChange={(event)=>{
                  setName(event.target.value);
                }}  required/>
                <input type="email" name="Email" placeholder="Your Email" required onChange={(event)=>{
                  setEmail(event.target.value);
                }}/>
                <textarea name="Message" rows="6" placeholder="Your Message" onChange={(event)=>{
                  setMessage(event.target.value);
                }}></textarea>
                <button type="submit" class="btn btn2">Submit</button>
                </form>
              
            </div>

          </div>
        </div>
      </div>
    </footer>




    </>  )
}

export default Footer