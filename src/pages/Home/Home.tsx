import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  // Initialise AOS animation library.
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container">
      {/* Hero image */}
      <div className="w-24 h-24 bg-black" data-aos="fade-up" data-aos-duration="1000"></div>
    </div>
  );
};

export default Home;
