import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-right: 10rem;
  padding-left: 15.4375rem;

  img {
    cursor: pointer;
  }
`;

export const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 0.75rem;

  span {
    font-family: "Roboto";
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: white;
    background-color: ${(props) => props.theme.productColors.yellowDark};
    position: absolute;
    left: 222px;
    bottom: 27px;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 100px;
    font-size: 0.75rem;
  }
`;

export const LocationButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${(props) => props.theme.productColors.purpleDark};
  background-color: ${(props) => props.theme.productColors.purpleLight};
  border: 0;
  border-radius: 6px;
  padding: 0.625rem 0.5rem;
  font-size: ${(props) => props.theme.roboto.s.size};
  font-weight: ${(props) => props.theme.roboto.s.weight};
`;

export const CartButton = styled.button`
  padding: 0.5rem;
  border: 0;
  background-color: ${(props) => props.theme.productColors.yellowLight};
  color: ${(props) => props.theme.productColors.yellowDark};
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;
  width: 2.375rem;

  &:hover {
    background-color: ${(props) => props.theme.productColors.yellow};
    color: ${(props) => props.theme.productColors.yellowLight};
  }
`;
