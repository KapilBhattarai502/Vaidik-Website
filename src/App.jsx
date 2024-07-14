import React from "react";
import "./App.css";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="bgimage">
          <div className="left-content">
            <div className="slogan">
              <span>WELCOME TO SOCIALZY</span>
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

                {/* <a className="introbtn" href="#">
                  Watch Intro
                </a> */}
              </div>
            </div>
          </div>
          <div className="right-image"></div>
        </div>
      </main>
      <div className="chooseUs">
        <div class="chooseUs-container">
          <div class="why-us strategy">
            <h4>Why Choose Us</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto deserunt quia nisi quae dolor!
            </p>
          </div>
          <div class="save-your-time strategy">
            <i class="fa-solid fa-clock"></i>
            <h4>Save your time</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto deserunt quia nisi quae dolor!
            </p>
          </div>
          <div class="affordable-price strategy">
            <i class="fa-solid fa-hand-holding-dollar"></i>
            <h4>Affordable Price</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto deserunt quia nisi quae dolor!
            </p>
          </div>
          <div class="best-strategy strategy">
            <i class="fa-solid fa-lightbulb"></i>
            <h4>Best Strategy</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto deserunt quia nisi quae dolor!
            </p>
          </div>
        </div>
        <div className="experience">
          <div class="left-container">
            <div class="experience-left">
              <img src="./public/images/myImage-removebg-preview.png" />
            </div>
          </div>
          <div class="experience-right">
            <div className="slogan">
              <span>WELCOME TO SOCIALZY</span>
            </div>
            <p>15 Years Of Experiences In Social Media Marketing</p>
           
            <p className="experincetab">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
              totam, facere excepturi facilis nulla omnis. Deleniti voluptatibus
              cupiditate iusto veniam, doloremque ipsum laboriosam sunt cum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
