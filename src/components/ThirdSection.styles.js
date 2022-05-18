import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 60rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  background-color: rgba(40, 1, 116, 0.02);

  > h1 {
    font-size: 2vw;
    border-bottom: 2px solid black;
    color: #272f7f;
  }

  @media (max-width: 950px) {
    height: 120em;
  }

  > button {
    border: none;
    width: 30em;
    height: 5em;
    background-color: rgba(247, 214, 47, 0.82);
    cursor: pointer;
  }
`;

export const UpperContainer = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 950px) {
    flex-direction: column;
  }

  > div {
    max-width: 25em;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    background-color: white;
    cursor: pointer;

    > h1 {
      font-size: 1.4vw;
    }

    @media (min-width: 950px) and (max-width: 1250px) {
      width: 20em;
      height: 70%;
    }

    @media (max-width: 950px) {
      height: 30%;
      width: 50em;
      justify-content: space-around;
    }

    > img {
      width: 80%;
      height: auto;
    }

    > p {
      width: 60%;
      align-items: center;
      line-height: 1.6em;
      text-align: center;
      opacity: 70%;
    }
  }
`;
