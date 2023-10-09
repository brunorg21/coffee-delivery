import styled from "styled-components";

export const HeaderSummaryContainer = styled.header`
  margin-top: 5rem;

  h2 {
    font-size: 2rem;
    color: ${(props) => props.theme.productColors.yellowDark};
    font-family: "Baloo 2";
  }
  p {
    font-family: "Roboto";
    font-size: 1rem;
    color: ${(props) => props.theme.baseColors.baseSubtitle};
  }
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CurrentDeliveryInformationContainer = styled.div`
  display: flex;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, #dbac2c, #8047f8) border-box;
  border: 1px solid transparent;
  position: relative;
  padding: 0.5em 1.5em;
  width: 34.125rem;
  border-bottom-left-radius: 36px;
  border-top-right-radius: 36px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  margin-top: 2.5rem;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  font-family: "Roboto";
`;

interface ContentProps {
  variant: "yellow" | "purple" | "yellowDark";
}

export const Content = styled.div<ContentProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background-color: ${(props) =>
      props.variant === "purple"
        ? props.theme.productColors.purple
        : props.variant === "yellow"
        ? props.theme.productColors.yellow
        : props.theme.productColors.yellowDark};
    border-radius: 100px;

    svg {
      color: white;
    }
  }
`;
