import styled from "styled-components";
import { MdOutlineCheckCircleOutline } from "react-icons/md";

export const CheckCircle = styled(MdOutlineCheckCircleOutline)`
  width: 40px;
  height: 40px;
  padding-right: 10px;
  position: absolute;
`;

export const Container = styled.div`
  height: 60em;
  width: 100%;
  background-color: #272f7f;
  margin-top: -5rem;
  display: flex;
  font-family: "Montserrat", sans-serif;
  justify-content: center;
  align-items: center;
  > div {
    width: 70%;
    height: 70%;
    display: flex;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 20px;

    @media (max-width: 1100px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    > div {
      width: 50%;
      height: 100%;
      background-color: white;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      @media (max-width: 900px) {
        width: 70%;
      }

      > h2 {
        font-size: 1em;
        @media (max-width: 900px) {
          font-size: 1em;
        }
      }

      > button {
        height: 4em;
        width: 16em;
        color: #272f7f;
        border: none;
        background-color: rgba(247, 214, 47, 0.82);
        cursor: pointer;
        transition-duration: 300ms;

        &:hover{
            transform: scale(1.2)
        }
      }
      > ul {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 60%;
        width: 80%;
        > li {
          height: 100px;
          display: flex;
          position: relative;

          align-items: center;
          > p {
            padding-left: 40px;

            @media (max-width: 900px) {
          font-size: 0.7em;
        }
          }
        }
      }
    }
  }
`;

export const Background = styled.div`
  width: 50%;
  height: 100%;
  background-image: url("https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 0;
`;
