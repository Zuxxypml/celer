import styled from "styled-components";
export const Image = styled.img`
  overflow-clip-margin: content-box;
  overflow: clip;
  box-sizing: content-box;
  max-width: 100%;
  padding: 0.2rem;
  text-align: center;
  filter: ${(props) =>
    props.filtered === "true"
      ? "invert(46%) sepia(95%) saturate(1983%) hue-rotate(347deg) brightness(98%) contrast(101%) !important"
      : "none"};
`;
