import styled from "styled-components";
import { BsBook } from "react-icons/bs";

export const Container = styled.div`
  width: 100%;
  height: 55em;
  display: flex;
  align-items: center;

  @media (max-width: 950px) {
    display: none;
  }
`;

export const Book = styled(BsBook)`
  width: 2em;
  height: auto;
`;

export const ContainerRight = styled.div`
  width: 50%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-family: "Montserrat", sans-serif;

  > h1 {
    font-size: 2em;
    color: #272f7f;
  }

  > p {
    border-top: 2px solid black;
    padding-top: 3em;
    width: 50%;
    font-size: 1.6em;
    text-align: center;
    font-weight: lighter;
    line-height: 1.5em;
    letter-spacing: 1px;
    opacity: 70%;

    > a {
      color: black;
      text-decoration: none;
      border-bottom: 1px solid black;
    }
  }
`;
export const ContainerLeft = styled.div`
  width: 50%;
  height: 100%;
  justify-content: center;
  display: flex;
  background-image: url("https://images.pexels.com/photos/416754/pexels-photo-416754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-color: #fbab7e;
`;

// MOBILE VERSION

export const MobileContainer = styled.div`
  width: 100%;
  height: 80rem;
  display: none;
  align-items: center;
  flex-direction: column;

  @media (max-width: 950px) {
    display: flex;
  }
`;

export const MobileContainerLeft = styled.div`
  width: 50%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-family: "Montserrat", sans-serif;

  > h1 {
    font-size: 4vw;
    color: #272f7f;
  }

  > p {
    border-top: 2px solid black;
    padding-top: 3em;
    width: 100%;
    font-size: 2vw;
    text-align: center;
    font-weight: lighter;
    line-height: 1.5em;
    letter-spacing: 1px;
    opacity: 70%;

    > a {
      color: black;
      text-decoration: none;
      border-bottom: 1px solid black;
    }
  }
`;

export const MobileContainerRight = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  background-image: url("https://images.pexels.com/photos/416754/pexels-photo-416754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-color: #fbab7e;
`;
