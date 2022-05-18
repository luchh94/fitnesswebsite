import styled from "styled-components";
import { CgArrowLongDown } from "react-icons/cg";

export const Container = styled.div`
  width: 100%;
  height: 55rem;
  display: flex;
  align-items: center;
  @media (max-width: 950px) {
    flex-direction: column;
    height: 80rem;
  }
`;

export const Arrow = styled(CgArrowLongDown)`
  width: 2em;
  height: auto;
  opacity: 40%;
`;

export const ContainerLeft = styled.div`
  width: 50%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-family: "Montserrat", sans-serif;

  > h1 {
    font-size: 2vw;
    color: #272f7f;

    @media (max-width: 950px) {
      font-size: 3vw;
    }
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

    @media (max-width: 950px) {
      width: 100%;
      font-size: 2vw;
    }
  }
`;
export const ContainerRight = styled.div`
  width: 50%;
  height: 100%;
  justify-content: center;
  display: flex;
  background-image: url("https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-color: #fbab7e;

  @media (max-width: 950px) {
    width: 100%;
  }
`;
