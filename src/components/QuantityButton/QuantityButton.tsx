import { useContext } from "react";
import * as S from "./styles";
import { Minus, Plus } from "@phosphor-icons/react";
import { CoffeeProps, CoffeesContext } from "../../context/CoffeesContext";

interface QuantityButtonProps {
  coffee: CoffeeProps;
}

export function QuantityButton({ coffee }: QuantityButtonProps) {
  const { setCoffees, setCoffeesToCart } = useContext(CoffeesContext);

  function handleDecreaseQuantity(coffee: CoffeeProps) {
    console.log(coffee);

    if (coffee.quantity >= 1) {
      setCoffeesToCart((state) => {
        const updatedCoffees = state.map((item) => {
          if (item.name === coffee.name) {
            return {
              ...item,
              quantity: coffee.quantity - 1,
            };
          } else {
            return item;
          }
        });

        return updatedCoffees;
      });
      setCoffees((state) => {
        const updatedCoffees = state.map((item) => {
          if (item.name === coffee.name) {
            return {
              ...item,
              quantity: coffee.quantity - 1,
            };
          } else {
            return item;
          }
        });

        return updatedCoffees;
      });
    }
  }

  function handleIncreaseQuantity(coffee: CoffeeProps) {
    if (coffee.quantity >= 0) {
      setCoffeesToCart((state) => {
        const updatedCoffees = state.map((item) => {
          if (item.name === coffee.name) {
            return {
              ...item,
              quantity: coffee.quantity + 1,
            };
          } else {
            return item;
          }
        });

        return updatedCoffees;
      });
      setCoffees((state) => {
        const updatedCoffees = state.map((item) => {
          if (item.name === coffee.name) {
            return {
              ...item,
              quantity: coffee.quantity + 1,
            };
          } else {
            return item;
          }
        });

        return updatedCoffees;
      });
    }
  }

  return (
    <S.QuantityContainer>
      <button onClick={() => handleDecreaseQuantity(coffee)}>
        <Minus size={16} />
      </button>
      <span>{coffee.quantity}</span>
      <button onClick={() => handleIncreaseQuantity(coffee)}>
        <Plus size={16} />
      </button>
    </S.QuantityContainer>
  );
}
