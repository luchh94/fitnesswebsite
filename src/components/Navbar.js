import React from "react";
import {
  Container,
  MobileDeviceContainer,
  DesktopDeviceContainer,
  Bars,
  MobileOpenMenu,
  Cross,
  MobileList,
} from "./Navbar.styles";
import Logo from "./../assets/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(true);

  const openDivHandler = (e) => {
    e.preventDefault();
    setOpen(!open);
    if(open){
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'visible';
    }
  };

  console.log(open);

  return (
    <Container>
      <MobileOpenMenu open={open ? "none" : "flex"}>
        <div>
          <img src={Logo} alt="Logo" />
          <ul>
            <a href="/">
              <li>Login</li>
            </a>
            <a href="/">
              <li>Werde Mitglied!</li>
            </a>
          </ul>
          <Cross onClick={openDivHandler} />
        </div>
        <MobileList>
          <ul>
            <li>Studios</li>
            <li>Mitgliedschaft</li>
            <li>Sportarten</li>
            <li>Probetraining</li>
          </ul>
        </MobileList>
      </MobileOpenMenu>
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
          <button>join us</button>

          <button>fragen?</button>
        </div>
        <div>
          <Bars onClick={openDivHandler} />
        </div>
      </MobileDeviceContainer>
    </Container>
  );
};

export default Navbar;
