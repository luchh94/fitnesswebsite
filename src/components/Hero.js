import React, { useEffect, useState } from "react";
import { Container } from "./Hero.styles";
import Aos from "aos";

const Hero = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const [offset, setOffset] = useState(0);

  window.addEventListener("scroll", () => {
    let offset = window.pageYOffset;
    setOffset(offset);
  });

  return (
    <Container offset={offset}>
      <div>
        <h1 data-aos="fade-left" aos_offset="100">
          WERDE <br />
          <span>MITGLIED</span>
        </h1>
        <h2 data-aos="fade-right" aos_offset="100">Hole dir eine Rabatt von 15% bis zum 10.07.2021</h2>
        <button data-aos="fade-up" aos_offset="100">Mehr Infos</button>
      </div>
    </Container>
  );
};

export default Hero;
