import React, { Fragment, useEffect } from "react";
import {
  Container,
  ContainerLeft,
  ContainerRight,
  Book,
  MobileContainerLeft,
  MobileContainerRight,
  MobileContainer,
} from "./SecondSection.styles";
import Aos from "aos";

const SecondSection = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Fragment>
      <Container>
        <ContainerLeft></ContainerLeft>
        <ContainerRight>
          <h1 data-aos="fade-down" aos_offset="3000">
            Personal Training
          </h1>
          <p data-aos="slide-up" aos_offset="600">
            Die korrekte Ausführung der Übungen ist wichtig und deswegen stehen
            dir rund um die Uhr Trainer für Fragen zu Verfügung. Buche jetzt ein
            kostenloses <a href="/">Probetraining!</a>
          </p>
          <Book data-aos="fade-left" aos_offset="100" />
        </ContainerRight>
      </Container>
      <MobileContainer>
        <MobileContainerLeft>
          <h1 data-aos="fade-down" aos_offset="3000">
            Personal Training
          </h1>
          <p data-aos="slide-up" aos_offset="600">
            Die korrekte Ausführung der Übungen ist wichtig und deswegen stehen
            dir rund um die Uhr für Fragen zu Verfügung. Buche jetzt ein
            kostenloses <a href="/">Probetraining!</a>
          </p>
          <Book data-aos="fade-left" aos_offset="100" />
        </MobileContainerLeft>
        <MobileContainerRight></MobileContainerRight>
      </MobileContainer>
    </Fragment>
  );
};

export default SecondSection;
