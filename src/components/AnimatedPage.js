import React, { useEffect, useRef } from "react";
import "../styles/animatedPage.css";
const AnimatedPage = () => {
  const buttonRef = useRef(null);
  const button2Ref = useRef(null);
  useEffect(() => {
    //FIRES WITH ANY CHANGE
    buttonRef.current.click();
    button2Ref.current.click();
  }, []);
  return (
    <>
      <div className="overlay">
        <div className="text">
            <div className="blocks">SOMETHING</div>
            <div className="blocks">EXCLUSIVE</div>
        </div>
      </div>
      <div className="overlay" style={{"margin-top": "28vw"}}>
        <div className="text">
            <div className="blocks" style={{"font-family":"Anton"}}>AMAZING</div>
            <div className="blocks" style={{"font-family":"Anton"}}>DESIGNS</div>
        </div>
      </div>

      <div className="carousels">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide carouselimg"
          data-bs-ride="carousel"
          data-bs-pause="false"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
              <div>
                <img
                  src={require("../images/goggles2z.jpg")}
                  className=""
                  alt="..."
                />
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <div>
                <img
                  src={require("../images/gogglesz.jpg")}
                  className=""
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
              ref={buttonRef} //USED A REF FOR AUTOCLICKING AS AUTOPLAY WAS NOT WORKING ON MOBILE
            >
              <span
                className="carousel-control-next-icon visually-hidden" //VISUALLY-HIDDEN HIDES THE ARROW
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div
          id="carouselExampleAutoplaying1"
          className="carousel slide carouselimg"
          data-bs-ride="carousel"
          data-bs-pause="false"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
              <div>
                <img
                  src={require("../images/goggles2.jpg")}
                  className=""
                  alt="..."
                />
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <div>
                <img
                  src={require("../images/goggles.jpg")}
                  className=""
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying1"
              data-bs-slide="next"
              ref={button2Ref}
            >
              <span
                className="carousel-control-next-icon visually-hidden"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimatedPage;
