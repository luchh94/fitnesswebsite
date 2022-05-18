import React from "react";
import {
  Container,
  MobileDeviceContainer,
  DesktopDeviceContainer,
  Bars,
} from "./Navbar.styles";
import Logo from "./../assets/logo.png";

const Navbar = () => {
  return (
    <Container>
      <DesktopDeviceContainer>
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <div>
          <ul>
            <a href="/">
              <li>Studios</li>
            </a>
            <a href="/">
              <li>Mitgliedschaft</li>
            </a>
            <a href="/">
              <li>Sportarten</li>
            </a>
            <a href="/">
              <li>Probetraining</li>
            </a>
          </ul>
        </div>
        <div>
          <button>join us</button>
          <button>fragen und Support</button>
        </div>
      </DesktopDeviceContainer>

      <MobileDeviceContainer>
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <div>
          <a href="/">join us</a>
          <a href="/">fragen?</a>
        </div>
        <div>
          <Bars />
        </div>
      </MobileDeviceContainer>
    </Container>
  );
};

export default Navbar;
