import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import * as S from "./styles";

import coffeeImage from "../../assets/image.svg";
import { FilterButton } from "../../components/FilterButton/FilterButton";
import { coffeesTypes } from "../../coffeeTypes";
import { useContext } from "react";
import { CoffeeProps, CoffeesContext } from "../../context/CoffeesContext";
import { toast } from "react-toastify";
import { QuantityButton } from "../../components/QuantityButton/QuantityButton";
import { priceFormat } from "../../utils/priceFormat";

export function Home() {
  const { coffees, setCoffeesToCart } = useContext(CoffeesContext);

  function handleAddCoffeeToCart(coffee: CoffeeProps) {
    setCoffeesToCart((state) => {
      return [...state, coffee];
    });

    toast.success("Café adicionado ao carrinho 🛒", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  return (
    <S.HomeContainer>
      <S.InformationContainer>
        <div>
          <S.Title>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </S.Title>
          <S.Benefits>
            <S.BenefitsContainer>
              <S.BenefitsIconContent variant="yellowDark">
                <span>
                  <ShoppingCart size={16} weight="fill" />
                </span>
                <p>Compra simples e segura</p>
              </S.BenefitsIconContent>
              <S.BenefitsIconContent variant="yellow">
                <span>
                  <Timer size={16} weight="fill" />
                </span>
                <p>Entrega rápida e rastreada</p>
              </S.BenefitsIconContent>
            </S.BenefitsContainer>
            <S.BenefitsContainer>
              <S.BenefitsIconContent variant="base">
                <span>
                  <Package size={16} weight="fill" />
                </span>
                <p>Embalagem mantém o café intacto</p>
              </S.BenefitsIconContent>
              <S.BenefitsIconContent variant="purple">
                <span>
                  <Coffee size={16} weight="fill" />
                </span>
                <p>O café chega fresquinho até você</p>
              </S.BenefitsIconContent>
            </S.BenefitsContainer>
          </S.Benefits>
        </div>
        <S.ImageContainer>
          <img src={coffeeImage} alt="" />
        </S.ImageContainer>
      </S.InformationContainer>
      <S.CoffeesContent>
        <S.HeaderCoffees>
          <h3>Nossos cafés</h3>
          <div>
            {coffeesTypes.map((coffee) => (
              <FilterButton key={coffee.type}>{coffee.type}</FilterButton>
            ))}
          </div>
        </S.HeaderCoffees>
        <S.CoffeesList>
          {coffees.map((coffee) => (
            <S.CoffeeCard key={coffee.id}>
              <S.CoffeeImage>
                <img src={coffee.url} alt="" />
              </S.CoffeeImage>
              <S.CoffeeTypeContainer>
                {coffee.types.map((type) => (
                  <label key={type.name} htmlFor="">
                    {type.name.toUpperCase()}
                  </label>
                ))}
              </S.CoffeeTypeContainer>
              <S.CoffeeMainContent>
                <h4>{coffee.name}</h4>
                <p>{coffee.description}</p>
              </S.CoffeeMainContent>
              <S.CoffeeFooter>
                <S.PriceContainer>
                  <span>{priceFormat.format(coffee.price)}</span>
                </S.PriceContainer>
                <S.Container>
                  <QuantityButton coffee={coffee} />
                  <S.CartButton
                    onClick={() => {
                      handleAddCoffeeToCart(coffee);
                    }}
                  >
                    <ShoppingCart size={22} weight="fill" />
                  </S.CartButton>
                </S.Container>
              </S.CoffeeFooter>
            </S.CoffeeCard>
          ))}
        </S.CoffeesList>
      </S.CoffeesContent>
    </S.HomeContainer>
  );
}
