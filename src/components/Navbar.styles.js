import styled from "styled-components";
import { FaBars } from "react-icons/fa";

export const Container = styled.div`
  width: 100%;
  height: 5rem;
`;

export const MobileDeviceContainer = styled.div`
  display: flex;
  height: 100%;
  font-weight: lighter;
  justify-content: space-around;
  align-items: center;
  > div {
    align-items: center;
    justify-content: center;
    > img {
      width: 8rem;
      height: auto;
    }

    > ul {
      list-style: none;
      display: flex;
    }

    > a {
      text-decoration: none;
      color: white;
      font-family: "Poppins", sans-serif;
      font-size: 1.4em;
    }
    &:nth-child(2) {
      display: flex;
      width: 10rem;
      justify-content: space-between;

      @media (min-width: 950px) {
        display: none;
      }
    }

    @media (min-width: 950px) {
      display: none;
    }
  }
`;

export const DesktopDeviceContainer = styled.div`
  display: none;
  height: 100%;

  justify-content: space-between;
  align-items: center;
  padding: 0px 25px;

  > div {
    > img {
      width: 8rem;
      height: auto;
    }

    > ul {
      letter-spacing: 1px;
      list-style: none;
      display: flex;
      justify-content: space-between;

      > a {
        color: white;
        text-decoration: none;
        > li {
          cursor: pointer;
          transition-duration: 300ms;
          &:hover {
            transform: scale(1.2);
          }
        }
      }
    }

    > button {
      height: 3em;
      padding: 0px 20px;
      color: #272f7f;
    }

    &:nth-child(2) {
      width: 30em;
      font-family: "Poppins", sans-serif;
      color: white;
    }

    &:nth-child(3) {
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      > button {
        background-color: rgba(247, 214, 47, 0.82);
        border: none;

        &:nth-child(1) {
          background-color: white;
        }
      }
    }
  }

  @media (min-width: 950px) {
    display: flex;
  }
`;

export const Bars = styled(FaBars)`
  width: 2em;
  height: auto;
  color: white;
`;
