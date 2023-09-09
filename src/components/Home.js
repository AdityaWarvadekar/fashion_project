import React from 'react'
import PolaroidStyle from './PolaroidStyle'
import "../styles/home.css"
import AnimatedPage from './AnimatedPage';
const Home = () => {
    //PARALLAX EFFECT STOP MID SCROLL 
    window.addEventListener('scroll',  function () {
        var parallaxImage = document.getElementsByClassName('parallax-img')[0];
        // for(let i=0; i<parallaxImageElements.length; i++){
        //     let parallaxImage = parallaxImageElements[i];
        var scrollPosition = window.scrollY;

        // Adjust this value to control when the parallax effect stops
        var stopPosition = 300; // Adjust as needed

        if (scrollPosition < stopPosition) {
            parallaxImage.style.transform = 'translateY(' + scrollPosition / 2 + 'px)';
        }
    // }
    });

    //ANIMATION DEPENDENT ON SCROLL LENGTH
    function reveal() {
        var revealElements = document.querySelectorAll(".reveal");
        for (var i = 0; i < revealElements.length; i++) {
          var windowHeight = window.innerHeight; //height of window
          var elementTop = revealElements[i].getBoundingClientRect().top; //distance of element's top from window top
          var visible = 50; // element's height to be visible after
          if (elementTop < windowHeight - visible) {
            revealElements[i].classList.add("active");
          } else {
            revealElements[i].classList.remove("active");
          }
        }
      }

      window.addEventListener('scroll', reveal);

      function revealNegX() {
        var revealElements = document.querySelectorAll(".revealNegX");
        for (var i = 0; i < revealElements.length; i++) {
          var windowHeight = window.innerHeight; //height of window
          var elementTop = revealElements[i].getBoundingClientRect().top; //distance of element's top from window top
          var visible = 50; // element's height to be visible after
          if (elementTop < windowHeight - visible) {
            revealElements[i].classList.add("active");
          } else {
            revealElements[i].classList.remove("active");
          }
        }
      }

      window.addEventListener('scroll', revealNegX);

  return (
    <>
    <div className="parallax">
        <div className="parallax-img img1" id="parallax-img">
            <h4 className="reveal">PRE-WINTER COLLECTION</h4>
            <button className='shopNow my-2 reveal'>SHOP NOW</button>
        </div>
    </div>

    <div className="HomeBanner">
        <PolaroidStyle text="JumpSuit-101"/>
        <div className="description my-5">
        <small>FASHION</small>
        <h3 className="revealNegX">DISCOVER THE LATEST COLLECTION 2023</h3>
        <button className='shopNow my-2 reveal'>SHOP NOW</button>
        </div>
    </div>

    <AnimatedPage/>

    <div className="parallax">
        <div className="parallax-img img2" >
            <h4 className="reveal">JEWELLERY</h4>
            <button className='shopNow my-2 reveal'>SHOP NOW</button>
        </div>
    </div>

    <div className="parallax">
        <div className="parallax-img img3" id="parallax-img">
            <h4 className="reveal my-5">FRAGRANCES</h4>
            <button className='shopNow reveal'>SHOP NOW</button>
        </div>
    </div>
    

    </>
  )
}

export default Home