import React from "react";
import { Container } from "./FourthSection.styles";
import Hamburg from "./../assets/hamburg.jpg";
import Berlin from "./../assets/berlin.jpg";
import Frankfurt from "./../assets/frankfurt.jpg";
import Wien from "./../assets/wien.jpg";
import München from "./../assets/münchen.jpg";

const FourthSection = () => {
  return (
    <Container>
      <p>Standorte</p>
      <div>
        <div>
          <img src={Hamburg} alt="Bild von Hamburg" />

          <h2>Hamburg</h2>
        </div>
        <div>
          <img src={Berlin} alt="Bild von Berlin" />

          <h2>Berlin</h2>
        </div>
        <div>
          <img src={Frankfurt} alt="Bild von Frankfurt" />

          <h2>Frankfurt</h2>
        </div>
        <div>
          <img src={Wien} alt="Bild von Wien" />

          <h2>Wien</h2>
        </div>
        <div>
          <img src={München} alt="Bild von München" />

          <h2>München</h2>
        </div>
      </div>
    </Container>
  );
};

export default FourthSection;
