import React, { useEffect } from "react";
import { Container, UpperContainer } from "./ThirdSection.styles";
import Yoga from "./../assets/yoga.jpg";
import Hanteln from "./../assets/hanteln.jpg";
import Trx from "./../assets/trx.jpg";
import Aos from "aos";

const ThirdSection = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Container>
      <h1>Unser Angebot</h1>
      <UpperContainer>
        <div data-aos="fade-down" aos_offset="100">
          <h1>Krafttraining</h1>
          <p>
            Trainiere deine Muskelgruppen isoliert in unserem Traininsbereich.
            Von Kurzhantel bis Langhantel ist alles dabei.
          </p>
          <img src={Hanteln} alt="Bild von Hanteln" />
        </div>
        <div data-aos="fade-down" aos_offset="100">
          <h1>TMX</h1>
          <p>
            Benutze dein eigenes Körpergewicht und Schlingen um deinen Körper
            gleichmäßig und gesund zu trainieren.
          </p>
          <img src={Trx} alt="Bild von TRX" />
        </div>
        <div data-aos="fade-down" aos_offset="100">
          <h1>Yoga</h1>
          <p>
            Trainiere sowohl deinen Körper als auch deinen Geist. Tue deinem
            Körper etwas gutes und besuche einen unserer Yoga-Kurse!
          </p>
          <img src={Yoga} alt="Bild von Yoga" />
        </div>
      </UpperContainer>
      <button>Finde Alle Kurse</button>
    </Container>
  );
};

export default ThirdSection;
