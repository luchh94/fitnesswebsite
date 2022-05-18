import React, { useEffect } from "react";
import {
  Container,
  ContainerLeft,
  ContainerRight,
  Arrow,
} from "./FirstSection.styles";
import Aos from "aos";

const FirstSection = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Container>
      <ContainerLeft>
        <h1 data-aos="fade-down" aos_offset="100">
          Warum Wir?
        </h1>
        <p data-aos="slide-up" aos_offset="600">
          Wir holen das Beste aus dir raus. Deine Fitness ist uns wichtig und
          deswegen kriegst du bei uns ein diverses Angebot an Kursen und
          Geräten.
        </p>
        <Arrow data-aos="fade-up" aos_offset="100" />
      </ContainerLeft>
      <ContainerRight></ContainerRight>
    </Container>
  );
};

export default FirstSection;
