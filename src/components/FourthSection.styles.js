import styled from "styled-components";

export const Container = styled.div`
  height: 30em;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-family: "Montserrat", sans-serif;
  background-color: rgba(40, 1, 116, 0.02);

  > p {
    width: 50%;
    padding-left: 30px;
    text-align: left;
    font-size: 2em;
    border-bottom: 1px solid black;
  }

  > div {
    height: 25em;
    overflow-x: scroll;
    display: grid;
    grid-auto-flow: column;
    gap: 50px;
    align-items: center;
    justify-items: center;
    > div {
      border-radius: 20px;
      width: 12em;
      height: 14em;
      display: flex;
      flex-direction: column;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      transition-duration: 300ms;
      cursor: pointer;
      &:hover {
        transform: scale(1.2);
      }

      > img {
        width: 100%;
        height: 70%;
      }

      > h2 {
        width: 100%;
        justify-content: center;
        margin-top: 20px;
        margin-left: 20px;
        font-weight: lighter;
        font-size: 1.2em;
      }
    }
  }
`;
