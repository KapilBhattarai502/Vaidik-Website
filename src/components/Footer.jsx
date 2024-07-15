import React from 'react'

const Footer = () => {
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
              <form name="submit-to-google-sheet">
                <input type="text" name="Name" placeholder="Your Name" required/>
                <input type="email" name="Email" placeholder="Your Email" required/>
                <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
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