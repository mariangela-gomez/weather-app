import React, { useState, useEffect } from "react";
import "./Styles/landingpage.css";
import BgVideo from "../media/bg.mp4";
import Navbar from "./Navbar";

const Landingpage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize(); // Llama a la función inicialmente para establecer el estado correcto
    window.addEventListener("resize", handleResize); // Escucha los cambios de tamaño de pantalla

    return () => {
      window.removeEventListener("resize", handleResize); // Limpia el event listener al desmontar el componente
    };
  }, []);

  return (
    <div className="landingpage">
      <Navbar />

      <video src={BgVideo} autoPlay muted loop className="video-bg" />
      <div className="bg-overlay"></div>

      <div className="home-text">
        {!isMobile && <h1>Tu App del clima</h1>}
        <p>No dejes que el mal tiempo te sorprenda</p>
      </div>
    </div>
  );
};

export default Landingpage;

