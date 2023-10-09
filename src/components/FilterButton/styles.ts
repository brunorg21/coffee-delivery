import styled from "styled-components";

export const FilterButtonContainer = styled.button`
  font-family: "Roboto";
  border: 2px solid ${(props) => props.theme.productColors.yellow};
  border-radius: 100px;
  color: ${(props) => props.theme.productColors.yellowDark};
  font-size: 0.625rem;
  font-weight: bold;
  padding: 0.375rem 0.75rem;
  background: transparent;
  margin-left: 0.5rem;
  transition: background-color 0.1s;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.productColors.yellowLight};
  }
`;
