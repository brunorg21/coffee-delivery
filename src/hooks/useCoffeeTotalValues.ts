import { CoffeeProps } from "../context/CoffeesContext";

export function useCoffeeTotalValues(coffees: CoffeeProps[]) {
  const summary = coffees.reduce(
    (acc, coffee) => {
      acc.total += coffee.price * coffee.quantity;
      acc.deliveryFee = acc.total + 3.5;
      return acc;
    },
    {
      total: 0,
      deliveryFee: 0,
    }
  );

  return {
    summary,
  };
}
