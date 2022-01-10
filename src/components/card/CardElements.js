import styled from "styled-components";

export const Wrapper = styled.div`
  background: #000;
`;

export const ContentWrapper = styled.div`
  max-width: 50%;
  margin: 0 auto;
  height: 100vh;
  perspective: 5000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainContent = styled.div`
  height: 600px;
  width: 400px;
  border: 1px solid white;
  border-radius: 20px;
  cursor: pointer;
  transform-style: preserve-3d;
  background: #090909;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
  position: absolute;
  top: -40px;
  transition: all 0.25s ease-in-out;
  z-index: 1;
  transition: all 0.25s ease-in-out;
`;

export const Name = styled.h3`
  margin: -20px 0 20px 0;
  font-size: 36px;
  background: -webkit-linear-gradient(45deg, #a6ff15, #3bff2a);
  font-family: "Poppins", sans-serif;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.25s ease-in-out;
`;

export const Details = styled.div``;

export const Body1 = styled.h5`
  font-size: 24px;
  margin: 10px 0;
  color: white;
  font-family: "Poppins", sans-serif;
  transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
`;

export const Body2 = styled(Body1)`
  font-size: 14px;
  padding: 10px 30px;
  font-family: "Poppins", sans-serif;
  transition: all 0.25s ease-in-out;
`;

export const Button = styled.button`
  width: 280px;
  height: 55px;
  border-radius: 20px;
  border: none;
  margin: 20px 0 0 0;
  cursor: pointer;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  background: #65f862;
  color: white;
  box-shadow: 0 10px 30px rgba(101, 248, 98, 0.2);
  transition: all 0.25s ease-in-out;
`;

export const DetailWrapper = styled.div`
  text-align: center;
`;
