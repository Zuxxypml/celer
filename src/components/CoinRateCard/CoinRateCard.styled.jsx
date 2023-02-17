import styled from "styled-components";

export const CoinCardCointainer = styled.div`
  background-color: #fff;
  color: #000;
  width: 45%;
  height: auto;
  padding: 0.75rem 0.5rem;
`;
export const CoinCardHeaderText = styled.h4`
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
export const CoinCardText = styled.p`
  color: green;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
