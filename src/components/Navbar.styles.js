import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export const Cross = styled(AiOutlineClose)`
  color: white;
  height: 40px;
  width: auto;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 5rem;
`;

export const MobileOpenMenu = styled.div`
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: black;
  display: ${(props) => props.open};
  flex-direction: column;
  position: fixed;
  font-family: "Montserrat", sans-serif;

  > img {
    width: 8rem;
    height: auto;
    cursor: pointer;
  }
  > div {
    padding: 20px 20px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    > ul {
      display: flex;

      list-style-type: none;
      text-align: center;
      padding: 0;
      font-size: 1.2em;

      > a {
        color: white;
        text-decoration: none;
        transition-duration: 300ms;

        &:hover {
          transform: scale(1.2);
        }

        > li {
          padding: 0px 20px;
        }

        &:nth-child(1) {
          border-right: 1px solid white;
        }
      }
    }

    > img {
      width: 15%;
      height: auto;
      cursor: pointer;
    }
  }
`;

export const MobileList = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  color: white;

  > ul {
    height: 100%;
    width: 100%;
    justify-content: space-around;
    display: flex;
    flex-direction: column;

    > li {
      cursor: pointer;
      transition-duration: 300ms;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
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
      cursor: pointer;
    }

    > button {
      height: 3em;
      width: 10em;
      padding: 0px 20px;
      margin: 0px 20px;
      color: white;
      border: 1px solid white;
      background-color: rgba(245, 40, 145, 0);
      cursor: pointer;
      transition-duration: 300ms;
      &:hover {
        transform: scale(1.2);
      }
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
      width: 20rem;
      justify-content: space-around;

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
      cursor: pointer;
    }

    > ul {
      letter-spacing: 1px;
      list-style: none;
      display: flex;
      justify-content: space-between;

      > a {
        color: white;
        text-decoration: none;
        > img {
          width: 8rem;
          height: auto;
          cursor: pointer;
        }
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
      transition-duration: 300ms;
      cursor: pointer;

      &:hover {
        transform: scale(1.2);
      }
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
  width: 2.5em;
  height: auto;
  color: white;
  transition-duration: 300ms;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;
