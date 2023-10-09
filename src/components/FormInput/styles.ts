import styled from "styled-components";
import { FormInputProps } from "./FormInput";

export const StyledInput = styled.input<FormInputProps>`
  border: 1px solid ${(props) => props.theme.baseColors.baseButton};
  background-color: ${(props) => props.theme.baseColors.baseInput};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.theme.baseColors.baseLabel};
  padding: ${(props) => props.padding};
  font-size: 0.875rem;
  border-radius: 4px;
  &:focus {
    outline: 1px solid ${(props) => props.theme.productColors.yellowDark};
  }

  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
`;

export const OptionalTextContainer = styled.div`
  font-family: "Roboto";
  font-style: italic;
  position: absolute;
  bottom: 12px;
  left: 285px;
  pointer-events: none;
  color: #aaa;
  font-size: 0.75rem;
`;

export const MessageError = styled.span`
  font-size: 1rem;
  color: red;
  text-align: center;
`;
