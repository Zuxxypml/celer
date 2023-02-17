import styled from "styled-components";

export const SectionContainer = styled.div`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color || "#fff"};
  height: ${(props) => `calc(${props.BigHeight})` || "auto"};
  padding: 4rem 8rem;
  padding-top: ${(props) => props.paddingTop};
  padding-bottom: ${(props) => props.paddingBottom};
  text-align: center;
  @media (max-width: 768px) {
    height: ${(props) => `calc(${props.height})` || "auto"};
    font-size: 2.3rem;
    padding: 1rem 2rem;
    padding-top: ${(props) => props.paddingTopSmall};
    padding-bottom: ${(props) => props.paddingBottomSmall};
  }
`;
export const SectionText = styled.h2`
  color: ${(props) => props.color || "#fff"};
  font-size: 5rem;
  margin-top: 2.1rem;
  margin-bottom: 3rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.3rem;
    padding: 1rem 2rem;
    margin-bottom: ${(props) => props.marginBottomSmall || "4rem"};
  }
`;
export const SectionTextP = styled.p`
  color: ${(props) => props.color || "#fff"};
  font-size: 2.5rem;
  margin-bottom: ${(props) => props.marginBottom || "4rem"};

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 1rem 2rem;
    margin-bottom: ${(props) => props.marginBottomSmall || "4rem"};
  }
`;
export const SectionFooterLink = styled.a`
  color: ${(props) => props.color || "#fff"};
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 1rem 2rem;
    margin-bottom: ${(props) => props.marginBottomSmall || "4rem"};
  }
`;
