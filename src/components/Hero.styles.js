import styled from "styled-components";

export const Container = styled.div`
  font-family: "Montserrat", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -5rem;
  width: 100%;
  height: 60rem;
  background-image: url("https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_1280.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 0;

  > div {
    height: 30em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    > h1 {
      color: white;
      font-size: 8vw;
      text-align: center;

      > span {
        color: #272f7f;
      }

      @media (max-width: 950px) {
        font-size: 12vw;
      }
    }

    > h2 {
      color: rgba(255, 255, 255, 0.7);
      font-size: 1.4vw;

      @media (max-width: 950px) {
        font-size: 3vw;
      }
    }

    > button {
      margin-top: 4em;
      height: 4em;
      border: none;
      width: 16em;
      background-color: rgba(247, 214, 47, 0.82);
      font-size: 1.2em;
      color: #272f7f;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      cursor: pointer;

      @media (max-width: 950px) {
        height: 3em;
        width: 12em;
      }
    }
  }
`;
