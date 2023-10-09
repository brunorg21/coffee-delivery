import styled from "styled-components";

export const QuantityContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 4.5rem;
  background-color: ${(props) => props.theme.baseColors.baseButton};
  height: 2.375rem;
  border-radius: 6px;

  span {
    font-family: "Roboto";
    font-size: 1rem;
  }

  button {
    background-color: transparent;
    color: ${(props) => props.theme.productColors.purple};
    border: 0;
    padding: 0.75rem 0.5rem;
    cursor: pointer;
    transition: color 0.1s;

    &:hover {
      color: ${(props) => props.theme.productColors.purpleDark};
    }
  }
`;
