import styled from "styled-components";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const FormContainer = styled.div`
  background: ${(props) => props.theme.baseColors.baseCard};
  height: 23.25rem;
  width: 40rem;
  margin-top: 0.9375rem;
  border-radius: 6px;
  padding: 2.5rem;
`;
export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 1rem;
`;

export const MainContainer = styled.div`
  margin-top: 2rem;
`;

interface HeaderContainerProps {
  color: "purple" | "yellowDark";
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  div {
    font-family: "Roboto";
    color: ${(props) => props.theme.baseColors.baseSubtitle};
    font-size: 1rem;
    line-height: 1.3;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme.baseColors.baseText};
  }

  svg {
    color: ${(props) =>
      props.color === "purple"
        ? props.theme.productColors.purple
        : props.theme.productColors.yellowDark};
  }
`;

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  height: 12.9375rem;
  background: ${(props) => props.theme.baseColors.baseCard};
  border-radius: 6px;
  padding: 2.5rem;
  margin-top: 0.75rem;
`;

export const PaymentTypeButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 0.75rem;
`;

export const PaymentTypeButton = styled(RadioGroup.Item)`
  display: flex;

  justify-content: center;
  cursor: pointer;
  gap: 0.75rem;
  padding: 1rem;
  border: none;
  background-color: ${(props) => props.theme.baseColors.baseButton};
  border-radius: 6px;
  color: ${(props) => props.theme.baseColors.baseText};
  font-size: 0.75rem;
  font-family: "Roboto";
  line-height: 1.6;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.baseColors.baseHover};
  }

  svg {
    color: ${(props) => props.theme.productColors.purple};
  }

  &[data-state="checked"] {
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.productColors.purpleLight};
    border: 1px solid ${(props) => props.theme.productColors.purple};
    svg {
      color: ${(props) => props.theme.white};
    }
  }
`;

export const SectionContainer = styled.section`
  width: 28rem;
  margin-top: 0.9375rem;
  background-color: ${(props) => props.theme.baseColors.baseCard};
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
  padding: 2.5rem;
`;

export const CoffeesToBuy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`;

export const CoffeesToBuyContent = styled.main`
  display: flex;
  border-bottom: 2px solid ${(props) => props.theme.baseColors.baseButton};
  padding-bottom: 1.5rem;
`;

export const NameAndPrice = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 1.25rem;
  justify-content: space-between;

  font-size: 1rem;
  font-family: "Roboto";
  color: ${(props) => props.theme.baseColors.baseSubtitle};
  line-height: 1.3;
  font-weight: bold;

  span {
    font-family: "Baloo 2";
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 1rem;
  font-family: "Roboto";
  color: ${(props) => props.theme.baseColors.baseSubtitle};
  line-height: 1.3;
  font-weight: bold;

  span {
    font-family: "Baloo 2";
  }
`;

export const ButtonsForCoffee = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const QuantityButton = styled.div`
  display: flex;
  gap: 0.4rem;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.baseColors.baseButton};
  border-radius: 6px;

  span {
    font-family: "Roboto";
    font-size: 1rem;
    line-height: 1.3;
  }

  button {
    background-color: transparent;
    cursor: pointer;
    border: none;

    svg {
      color: ${(props) => props.theme.productColors.purple};
      transition: color 0.2s;

      &:hover {
        color: ${(props) => props.theme.productColors.purpleDark};
      }
    }
  }
`;

export const RemoveButton = styled.button`
  padding: 0.5rem;
  border: none;
  background-color: ${(props) => props.theme.baseColors.baseButton};
  border-radius: 6px;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: background-color 0.1s;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.baseColors.baseHover};
    color: ${(props) => props.theme.baseColors.baseSubtitle};

    svg {
      color: ${(props) => props.theme.productColors.purpleDark};
    }
  }

  svg {
    color: ${(props) => props.theme.productColors.purple};
  }
`;

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  gap: 0.75rem;

  button {
    border: none;
    color: ${(props) => props.theme.baseColors.white};
    background-color: ${(props) => props.theme.productColors.yellow};
    font-weight: bold;
    border-radius: 6px;
    font-size: 0.875rem;
    height: 2.875rem;
    margin-top: 1.5rem;
    cursor: pointer;
    transition: background-color 0.1s;

    &:hover {
      background-color: ${(props) => props.theme.productColors.yellowDark};
    }
  }
`;

export const ItemsPrice = styled.div`
  display: flex;
  justify-content: space-between;

  font-family: "Roboto";
  font-size: 0.875rem;
  color: ${(props) => props.theme.baseColors.baseText};
  font-weight: 400;
  span {
    font-size: 1rem;
  }
`;

export const TotalItems = styled.div`
  display: flex;
  justify-content: space-between;

  font-family: "Roboto";
  font-size: 1.25rem;
  font-weight: bold;
  color: ${(props) => props.theme.baseColors.baseSubtitle};
`;

export const CartContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  h4 {
    font-family: "Baloo 2";
    font-size: 1.125rem;
    line-height: 1.3;
  }
`;

export const PaymentsType = styled(RadioGroup.Root)`
  margin-top: 2rem;
  display: flex;
  gap: 0.75rem;
`;
