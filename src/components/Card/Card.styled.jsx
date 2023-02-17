import styled from "styled-components";

export const CardContainer = styled.div`
  height: 500px;
  width: 400px;
  border-radius: 1rem;
  -webkit-box-shadow: -2px -1px 15px 7px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: -3px -2px 30px 14px rgba(0, 0, 0, 0.15);
  box-shadow: -4px -3px 45px 21px rgba(0, 0, 0, 0.15);
  @media (max-width: 768px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 100%;
    height: auto;
    padding: 1rem 0rem;
    padding-bottom: 1.5rem;
  }
`;
export const CardLi = styled.li`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
