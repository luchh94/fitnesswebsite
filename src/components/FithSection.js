import React from "react";
import {
  Container,
  UpperContainer,
  LowerContainer,
  Youtube,
  Instagram,
  Facebook,
} from "./FithSection.styles";

const FithSection = () => {
  return (
    <Container>
      <UpperContainer>
        <div>
          <p>Über Plex</p>
          <ul>
            <li>Unternehmen</li>
            <li>Jobs</li>
            <li>Plex als Arbeitgeber</li>
            <li>Presse</li>
          </ul>
        </div>
        <div>
          <p>Kooperation</p>
          <ul>
            <li>Kontak für Kooperation</li>
            <li>Fitness für Firmen</li>
            <li>Fitness für Mitarbeiter</li>
            <li>Vereinsfitness</li>
          </ul>
        </div>
        <div>
          <p>Support</p>
          <ul>
            <li>Members Area</li>
            <li>Hilfe und Kontakt</li>
          </ul>
        </div>
      </UpperContainer>
      <LowerContainer>
        <div>
          <ul>
            <li>Impressum</li>
            <li>Datenschutzerklärung</li>
            <li>Cookie-Einstellung</li>
            <li>AGB</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Facebook />
            </li>
            <li>
              <Instagram />
            </li>
            <li>
              <Youtube />
            </li>
          </ul>
        </div>
      </LowerContainer>
    </Container>
  );
};

export default FithSection;
