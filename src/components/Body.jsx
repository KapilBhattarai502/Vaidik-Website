import React from "react";

const Body = () => {
  return (
    <>
      <main>
        <div className="bgimage">
          <div className="left-content">
            <div className="slogan">
              <span>WELCOME TO VAIDIK</span>
            </div>
            <h3>
              Welcome to Vaidik
              <br />
              Pooja Samagri Suppliers
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
              quidem accusantium, quod aliquid explicabo unde illo aut? Aut
              omnis quas ipsa excepturi, repellendus earum ducimus! Recusandae
              dolor porro eligendi illum.
            </p>
            <div className="bgimage-btns">
              <div className="getStartedbtn">
                <button>
                  Get Started<i class="fa-regular fa-circle-play"></i>
                </button>
              </div>
              <div className="watchIntrobtn">
                <button>
                  <i class="fa-solid fa-play"></i>Watch Intro
                </button>

              </div>
                {/* <a className="introbtn" href="#">
              Watch Intro
            </a> */}
            </div>
          </div>
          <div className="right-image"></div>
        </div>
      </main>
      <div id="choose" className="chooseUs">
        <div class="chooseUs-container">
          <div class="why-us strategy">
            <h4>Why Choose Us</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto deserunt quia nisi quae dolor!
            </p>
          </div>
          <div class="save-your-time strategy">
            <i class="fa-solid fa-clock choosebtn"></i>
            <h4>Save your time</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto deserunt quia nisi quae dolor!
            </p>
          </div>
          <div class="affordable-price strategy">
            <i class="fa-solid fa-hand-holding-dollar choosebtn"></i>
            <h4>Affordable Price</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto deserunt quia nisi quae dolor!
            </p>
          </div>
          <div class="best-strategy strategy">
            <i class="fa-solid fa-lightbulb choosebtn"></i>
            <h4>Best Strategy</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto deserunt quia nisi quae dolor!
            </p>
          </div>
        </div>
        <div className="experience">
          <div class="experience-left">
            <img src="./images/myImage-removebg-preview.png" />
          </div>
          <div class="experience-right">
            <div className="slogan">
              <span>WELCOME TO VAIDIK</span>
            </div>
            <h4 className="experiencehead">
              15 Years Of Experiences In Social Media Marketing
            </h4>

            <p className="experincetab">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
              totam, facere excepturi facilis nulla omnis. Deleniti voluptatibus
              cupiditate iusto veniam, doloremque ipsum laboriosam sunt cum.
            </p>
            <h5>Optimization Engine Book</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              aliquid, eaque reiciendis dicta laboriosam id!
            </p>
            <h5>Listen & Engage With followers</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              aliquid, eaque reiciendis dicta laboriosam id!
            </p>
            <h5>Higher Customer Satisfaction</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              aliquid, eaque reiciendis dicta laboriosam id!
            </p>
          </div>
        </div>
      </div>
      <div className="above-footer">
        <div className="container">
          <div className="slogan abovefooterslogan">
            <span>WELCOME TO VAIDIK</span>
          </div>
          <h3>Meet Our Team</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum a
            obcaecati magni dolorem quos. A.
          </p>
          <div className="services-container">
            <div className="photo service">
              <div className="photoBox"></div>
              <h4>Kapil Bhattarai</h4>
             
            
            </div>
            <div className="email-marketing service">
            <div className="photoBox"></div>
              <h4>Sagar Tiwari</h4>
            
            </div>
            <div className="seo-management service">
            <div className="photoBox"></div>
              <h4>Nabin Bashyal</h4>
             
            </div>
            <div className="content-writer service">
            <div className="photoBox"></div>
              <h4>Shova Subedi</h4>
             
            </div>
            <div className="business-strategy service">
            <div className="photoBox"></div>
              <h4>Gopal Regmi</h4>
             
            </div>
            <div className="social-media-management service">
            <div className="photoBox"></div>
              <h4>Shaligram Sharma</h4>
             
            </div>
          </div>
        </div>
      </div>
      <div id="service" className="above2-footer">
        <div className="container">
          <h3>Our Services</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum a
            obcaecati magni dolorem quos. A.
          </p>
          <div className="staff-container">
            <div className="photo staff">
              <i class="fa-solid fa-clock"></i>
              <h4> Service</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus corrupti consectetur voluptas suscipit numquam
                voluptates reprehenderit optio hic exercitationem nam qui nemo,
                eius culpa vel.
              </p>
            </div>
            <div className="email-marketing staff">
              <i class="fa-solid fa-clock"></i>
              <h4> Service</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus corrupti consectetur voluptas suscipit numquam
                voluptates reprehenderit optio hic exercitationem nam qui nemo,
                eius culpa vel.
              </p>
            </div>
            <div className="seo-management staff">
              <i class="fa-solid fa-clock"></i>
              <h4> Service</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus corrupti consectetur voluptas suscipit numquam
                voluptates reprehenderit optio hic exercitationem nam qui nemo,
                eius culpa vela.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
