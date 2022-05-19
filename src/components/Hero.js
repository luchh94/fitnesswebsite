import React, { useEffect } from "react";
import { Container } from "./Hero.styles";
import Aos from "aos";
import { useNavigate } from "react-router";

const Hero = () => {
  const navigate = useNavigate()
  useEffect(() => {
    Aos.init();
  }, []);

  const redirectHandler = (e) => {
    navigate("/membership")

  }

  return (
    <Container>
      <div>
        <h1 data-aos="fade-left" aos_offset="100">
          ÜBERTREFFE DEIN <br />
          <span>LIMIT</span>
        </h1>
        <h2 data-aos="fade-right" aos_offset="100">
          Hole dir eine Rabatt von 15% bis zum 10.07.2021
        </h2>
        <button onClick={redirectHandler} data-aos="fade-up" aos_offset="100">
          Mehr Infos
        </button>
      </div>
    </Container>
  );
};

export default Hero;
