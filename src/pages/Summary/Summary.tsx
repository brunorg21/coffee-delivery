import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import summaryImage from "../../assets/Illustration.svg";
import * as S from "./styles";
import { useContext } from "react";
import { CoffeesContext } from "../../context/CoffeesContext";

export function Summary() {
  const { currentDelivery } = useContext(CoffeesContext);

  return (
    <>
      <S.HeaderSummaryContainer>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </S.HeaderSummaryContainer>
      <S.MainContent>
        <S.CurrentDeliveryInformationContainer>
          <S.InformationContainer>
            <S.Content variant="purple">
              <div>
                <MapPin size={22} weight="fill" />
              </div>
              <p>
                Entrega em{" "}
                <strong>
                  {currentDelivery.rua}, {currentDelivery.numero}
                </strong>{" "}
                {currentDelivery.bairro} - {currentDelivery.cidade}/
                {currentDelivery.uf}
              </p>
            </S.Content>
            <S.Content variant="yellow">
              <div>
                <Timer size={22} weight="fill" />
              </div>
              <p>
                Previsão de entrega{" "}
                <main>
                  <strong>20 min - 30 min</strong>
                </main>
              </p>
            </S.Content>
            <S.Content variant="yellowDark">
              <div>
                <CurrencyDollar size={22} weight="fill" />
              </div>
              <p>
                Pagamento na entrega{" "}
                <main>
                  <strong>{currentDelivery.paymentType}</strong>
                </main>
              </p>
            </S.Content>
          </S.InformationContainer>
        </S.CurrentDeliveryInformationContainer>
        <img src={summaryImage} alt="" />
      </S.MainContent>
    </>
  );
}
