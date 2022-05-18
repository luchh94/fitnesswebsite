import styled from "styled-components";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

export const Facebook = styled(BsFacebook)``;

export const Instagram = styled(BsInstagram)``;

export const Youtube = styled(BsYoutube)``;

export const Container = styled.div`
  width: 100%;
  height: 25em;
  background-color: black;
  font-family: "Montserrat", sans-serif;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 950px) {
    height: 60em;
  }
`;

export const UpperContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    height: 50%;
    width: 100%;
    justify-content: center;
    align-items: center;

    @media (max-width: 950px) {
      text-align: center;
      justify-content: center;
    }

    > p {
      font-size: 1.2em;
    }
    > ul {
      list-style-type: none;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 0;
      > li {
        font-weight: lighter;
        padding: 15px 0px;
        opacity: 70%;
      }
    }
  }

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

export const LowerContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  > div {
    > ul {
      list-style-type: none;
      display: flex;
      > li {
        padding: 10px 10px;
      }
    }
  }

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
    font-size: 0.8em;
  }
`;
