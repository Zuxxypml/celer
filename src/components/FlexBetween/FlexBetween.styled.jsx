import styled from "styled-components";

export const FlexBetween = styled.div`
  display: flex;
  flex-wrap: ${(props) => props.wrap || "no-wrap"};
  text-align: ${(props) => props.textAlign};
  justify-content: ${(props) => props.justifyContent || "space-between"};
  align-items: ${(props) => props.alignItems || "center"};
  gap: ${(props) => props.gap || "1.9rem"};
  flex-direction: ${(props) => props.column || "row"};
  height: auto;
  @media (max-width: 768px) {
    flex-wrap: ${(props) => props.wrapSmall || "no-wrap"};
    align-items: ${(props) => props.alignItemsSmall || "center"};
    justify-content: ${(props) => props.justifyContentSmall || "space-between"};
    flex-direction: ${(props) => props.smallColumn || "row"};
    gap: ${(props) => props.gapSmall || "1.9rem"};
  }
`;
