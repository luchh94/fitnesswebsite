import React, { useEffect } from "react";
import { Container, Background, CheckCircle } from "./Membership.styles";
import Aos from "aos";

const Membership = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Container>
      <div>
        <Background></Background>
        <div>
          <h2>Ein Tarif, mehr brauchst du nicht.</h2>
          <ul>
            <li>
              <CheckCircle />
              <p data-aos="fade-left" data-aos-delay='100'>Die ersten drei Monate sind gratis</p>
            </li>
            <li>
              <CheckCircle />
              <p data-aos="fade-left" data-aos-delay='200'>
                Du zahlst 39,50€ im Monat und hast Zugriff auf alle Kurse und
                kostenlose Getränke.
              </p>
            </li>
            <li>
              <CheckCircle />
              <p data-aos="fade-left" data-aos-delay='300'>Jederzeit fristlos kündbar.</p>
            </li>
            <li>
              <CheckCircle />
              <p data-aos="fade-left" data-aos-delay='400'>
                Deine Freunde können an jedem Wochenende umsonst mit dir
                mittrainieren.
              </p>
            </li>
          </ul>
          <h1 data-aos="fade-left" data-aos-delay='1000'>29,99€/Monat</h1>
          <button>Werde Mitgleid</button>
        </div>
      </div>
    </Container>
  );
};

export default Membership;
