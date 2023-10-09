import Logo from "../../assets/Logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import * as S from "./styles";
import { useContext } from "react";
import { CoffeesContext } from "../../context/CoffeesContext";
import { useNavigate } from "react-router-dom";

export function Header() {
  const { coffeesToCart } = useContext(CoffeesContext);

  const navigation = useNavigate();

  return (
    <S.HeaderContainer>
      <img onClick={() => navigation("/")} src={Logo} alt="Coffee Logo" />

      <S.ButtonWrapper
        onClick={() => {
          navigation("/cart");
        }}
      >
        <S.LocationButton>
          <MapPin size={22} weight="fill" />
          Pindamonhangaba, SP
        </S.LocationButton>
        <span>{coffeesToCart.length}</span>
        <S.CartButton>
          <ShoppingCart size={22} weight="fill" />
        </S.CartButton>
      </S.ButtonWrapper>
    </S.HeaderContainer>
  );
}
