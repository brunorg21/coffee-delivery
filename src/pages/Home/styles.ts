import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const InformationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 5.375rem;
  padding-bottom: 7.25rem;
  height: 34rem;
  width: 100%;
`;

export const Title = styled.div`
  width: 36.75rem;

  h1 {
    font-family: "Baloo 2";
    font-size: ${(props) => props.theme.ballo2.xl.size};
    font-weight: ${(props) => props.theme.ballo2.xl.weight};
  }

  p {
    margin-top: 1rem;
    font-family: "Roboto";
    font-size: ${(props) => props.theme.roboto.l.size};
    line-height: 1.4;
  }
`;

export const Benefits = styled.div`
  display: flex;
  flex-direction: row;
  width: 35.4375rem;
  margin-top: 4.125rem;
  gap: 1.59375rem;
`;

export const BenefitsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1.59375rem;
`;

export const ImageContainer = styled.div`
  padding-left: 3.5rem;
`;

export const CoffeesContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const HeaderCoffees = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  h3 {
    font-family: "Baloo 2";
    font-size: ${(props) => props.theme.ballo2.l.size};
    font-weight: ${(props) => props.theme.ballo2.l.weight};
  }
`;

export const CoffeesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 3.375rem;
  gap: 2.76rem;
  padding-bottom: 9.8125rem;
`;

export const CoffeeCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 16rem;
  height: 19.375rem;
  background-color: ${(props) => props.theme.baseColors.baseCard};
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
`;

export const CoffeeImage = styled.div`
  margin-top: -18px;
`;

export const CoffeeTypeContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-top: 0.75rem;

  label {
    font-family: "Roboto";
    background-color: ${(props) => props.theme.productColors.yellowLight};
    color: ${(props) => props.theme.productColors.yellowDark};
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    font-size: 0.625rem;
    font-weight: bold;
  }
`;

export const CoffeeMainContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  width: 13.5rem;

  h4 {
    font-family: "Baloo 2";
    font-size: ${(props) => props.theme.ballo2.s.size};
    font-weight: ${(props) => props.theme.ballo2.s.weight};
  }

  p {
    text-align: center;

    font-family: "Roboto";
    font-size: ${(props) => props.theme.roboto.s.size};
    font-weight: ${(props) => props.theme.roboto.s.weight};
    color: ${(props) => props.theme.baseColors.baseLabel};
  }
`;

export const CoffeeFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 13rem;
  margin-top: 2.0625rem;
`;

export const PriceContainer = styled.div`
  font-family: "Roboto";
  font-size: 0.875rem;
  color: ${(props) => props.theme.baseColors.baseText};

  span {
    font-family: "Baloo 2";
    font-size: 1.5rem;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  width: 2.375rem;
  height: 2.375rem;
  padding: 0.5rem;
  color: white;
  background-color: ${(props) => props.theme.productColors.purpleDark};
  border: none;
  border-radius: 6px;
  transition: background-color 0.1s;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.productColors.purple};
  }
`;

interface BenefitsIconStylesProps {
  variant: "yellow" | "base" | "purple" | "yellowDark";
}

export const BenefitsIconContent = styled.div<BenefitsIconStylesProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    display: flex;
    align-items: center;
    padding: 0.625rem 0.6rem;

    color: white;
    border-radius: 100%;
    background-color: ${(props) =>
      props.variant === "yellow"
        ? props.theme.productColors.yellow
        : props.variant === "base"
        ? props.theme.baseColors.baseText
        : props.variant === "purple"
        ? props.theme.productColors.purple
        : props.theme.productColors.yellowDark};
  }

  p {
    font-family: "Roboto";
    font-size: ${(props) => props.theme.roboto.m.size};
  }
`;
