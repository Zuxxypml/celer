import styled from "styled-components";

export const Button = styled.button`
  color: ${(props) => props.color || "#fff"};
  background-color: ${(props) => props.backgroundColor || "#000"};
  border: none;
  padding: ${(props) => props.padding || "0.75rem 0.5rem"};
  border-radius: 0.35rem;
  font-size: ${(props) => props.fontSize || "0.95rem"};
  cursor: pointer;
  margin-top: ${(props) => props.marginTop || "0.95rem"};
`;

export const ButtonA = styled.a`
  color: ${(props) => props.color || "#fff"};
  background-color: ${(props) => props.backgroundColor || "#000"};
  border: none;
  padding: ${(props) => props.padding || "0.75rem 0.5rem"};
  border-radius: 0.35rem;
  font-size: ${(props) => props.fontSize || "0.95rem"};
  cursor: pointer;
  margin-top: ${(props) => props.marginTop || "0.95rem"};
  text-decoration: none;
`;
