import { InputHTMLAttributes } from "react";
import { OptionalTextContainer, StyledInput } from "./styles";
import { FieldError, UseFormRegister } from "react-hook-form";
import { RegisterAddress } from "../Form/Form";

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  padding: string;
  optionalText?: string;
  register: UseFormRegister<RegisterAddress>;
  label:
    | "cep"
    | "rua"
    | "complemento"
    | "cidade"
    | "bairro"
    | "uf"
    | "paymentType"
    | "numero";
  error?: FieldError;
}

export function FormInput(props: FormInputProps) {
  const { register, label } = props;
  return (
    <>
      <div style={{ position: "relative", width: props.width }}>
        <StyledInput
          {...register(label, {
            valueAsNumber: props.type === "number",
          })}
          {...props}
        />

        {props.optionalText && props.value === undefined && (
          <OptionalTextContainer>{props.optionalText}</OptionalTextContainer>
        )}
      </div>
    </>
  );
}
