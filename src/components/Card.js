import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Card = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="card">
        <h2>This is a Card</h2>
      </div>
      <div className="card">
        <h2>This is a Card</h2>
      </div>
      <div data-aos="fade-up" className="card">
        <h2>This is a Card</h2>
      </div>
      <div data-aos="fade-right" className="card">
        <h2>This is a Card</h2>
      </div>
      <div data-aos="fade-left" className="card">
        <h2>This is a Card</h2>
      </div>
      <div data-aos="flip-left" className="card">
        <h2>This is a Card</h2>
      </div>
    </>
  );
};

export default Card;
