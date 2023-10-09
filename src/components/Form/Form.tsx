import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from "@phosphor-icons/react";
import { FormInput } from "../FormInput/FormInput";
import * as S from "./styles";

import { Controller, useForm } from "react-hook-form";
import { QuantityButton } from "../QuantityButton/QuantityButton";
import { priceFormat } from "../../utils/priceFormat";
import { useContext } from "react";
import { CoffeesContext } from "../../context/CoffeesContext";
import { useCoffeeTotalValues } from "../../hooks/useCoffeeTotalValues";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const registerAddressSchema = z.object({
  cidade: z.string(),
  complemento: z.string(),
  rua: z.string(),
  numero: z.number(),
  cep: z.number(),
  uf: z.string().max(2, "Campo UF aceita no máximo 2 caracteres!"),
  paymentType: z.string(),
  bairro: z.string(),
});

export type RegisterAddress = z.infer<typeof registerAddressSchema>;

export function Form() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterAddress>({
    resolver: zodResolver(registerAddressSchema),
  });
  const { coffeesToCart, setCoffeesToCart, setCurrentDelivery } =
    useContext(CoffeesContext);
  const { summary } = useCoffeeTotalValues(coffeesToCart);

  const navigation = useNavigate();

  function handleSetDeliveryAddress(data: RegisterAddress) {
    setCurrentDelivery(data);
    setCoffeesToCart([]);
    navigation("/summary");
  }

  return (
    <S.CartContainer onSubmit={handleSubmit(handleSetDeliveryAddress)}>
      <main style={{ marginTop: "2.5rem" }}>
        <h4>Complete seu pedido</h4>
        <S.FormContainer>
          <S.HeaderContainer color="yellowDark">
            <MapPinLine size={22} />
            <div>
              Endereço de Entrega
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </S.HeaderContainer>
          <S.MainContainer>
            <FormInput
              label="cep"
              width="12.5rem"
              padding="0.75rem"
              type="number"
              placeholder="CEP"
              register={register}
            />
            <S.InputsContainer>
              <FormInput
                label="rua"
                type="text"
                width="100%"
                padding="0.75rem"
                placeholder="Rua"
                register={register}
              />
              <div style={{ display: "flex", gap: "0.75rem" }}>
                <FormInput
                  label="numero"
                  width="12.5rem"
                  placeholder="Número"
                  padding="0.75rem"
                  type="number"
                  register={register}
                />
                <FormInput
                  label="complemento"
                  width="21.75rem"
                  placeholder="Complemento"
                  padding="0.75rem"
                  type="text"
                  optionalText="Opcional"
                  register={register}
                />
              </div>
              <div style={{ display: "flex", gap: "0.75rem" }}>
                <FormInput
                  label="bairro"
                  width="12.5rem"
                  placeholder="Bairro"
                  padding="0.75rem"
                  type="text"
                  register={register}
                />
                <FormInput
                  label="cidade"
                  width="17.25rem"
                  placeholder="Cidade"
                  padding="0.75rem"
                  type="text"
                  register={register}
                />
                <FormInput
                  label="uf"
                  width="3.75rem"
                  placeholder="UF"
                  padding="0.75rem"
                  error={errors.uf}
                  type="text"
                  register={register}
                />
              </div>
            </S.InputsContainer>
          </S.MainContainer>
        </S.FormContainer>
        <S.PaymentContainer>
          <S.HeaderContainer color="purple">
            <CurrencyDollar size={22} />
            <div>
              Pagamento
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </S.HeaderContainer>
          <Controller
            control={control}
            name="paymentType"
            render={({ field }) => {
              return (
                <S.PaymentsType
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <S.PaymentTypeButton value="Cartão de Crédito">
                    <CreditCard size={18} />
                    CARTÃO DE CRÉDITO
                  </S.PaymentTypeButton>
                  <S.PaymentTypeButton value="Cartão de Débito">
                    <Bank size={18} />
                    CARTÃO DE DÉBITO
                  </S.PaymentTypeButton>
                  <S.PaymentTypeButton value="Dinheiro">
                    <Money size={18} />
                    DINHEIRO
                  </S.PaymentTypeButton>
                </S.PaymentsType>
              );
            }}
          />
        </S.PaymentContainer>
      </main>
      <section style={{ marginTop: "2.5rem" }}>
        <h4>Cafés Selecionados</h4>

        <S.SectionContainer>
          <S.CoffeesToBuy>
            {coffeesToCart.map((coffee) => (
              <S.CoffeesToBuyContent key={coffee.id}>
                <div>
                  <img src={coffee.url} alt="" />
                </div>
                <S.NameAndPrice>
                  <S.Header>
                    {coffee.name} <span>R$ {coffee.price}0</span>
                  </S.Header>
                  <S.ButtonsForCoffee>
                    <QuantityButton coffee={coffee} />
                    <S.RemoveButton
                      onClick={() => {
                        setCoffeesToCart((state) => {
                          return state.filter((item) => {
                            return item.id !== coffee.id;
                          });
                        });
                      }}
                    >
                      <Trash size={14} />
                      REMOVER
                    </S.RemoveButton>
                  </S.ButtonsForCoffee>
                </S.NameAndPrice>
              </S.CoffeesToBuyContent>
            ))}
          </S.CoffeesToBuy>
          <S.FooterContainer>
            <S.ItemsPrice>
              Total de Itens <span>{priceFormat.format(summary.total)}</span>
            </S.ItemsPrice>
            <S.ItemsPrice>
              Entrega <span>R$ 3,50</span>
            </S.ItemsPrice>
            <S.TotalItems>
              Total <span>{priceFormat.format(summary.deliveryFee)}</span>
            </S.TotalItems>
            <button type="submit">CONFIRMAR PEDIDO</button>
          </S.FooterContainer>
        </S.SectionContainer>
      </section>
    </S.CartContainer>
  );
}
