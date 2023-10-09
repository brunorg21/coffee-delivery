import { ReactNode, createContext, useState } from "react";
import { data } from "../api";

interface CoffeesContextProviderProps {
  children: ReactNode;
}

export interface CoffeTypes {
  name: string;
}

export interface CoffeeProps {
  id: number;
  name: string;
  description: string;
  url: string;
  price: number;
  types: CoffeTypes[];
  quantity: number;
}

interface CurrentDelivery {
  cep: number;
  numero: number;
  paymentType: string;
  cidade: string;
  complemento: string;
  uf: string;
  bairro: string;
  rua: string;
}

interface CoffeesContextProps {
  coffees: CoffeeProps[];
  coffeesToCart: CoffeeProps[];
  currentDelivery: CurrentDelivery;
  setCoffees: React.Dispatch<React.SetStateAction<CoffeeProps[]>>;
  setCoffeesToCart: React.Dispatch<React.SetStateAction<CoffeeProps[]>>;
  setCurrentDelivery: React.Dispatch<React.SetStateAction<CurrentDelivery>>;
}

export const CoffeesContext = createContext({} as CoffeesContextProps);

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [coffees, setCoffees] = useState<CoffeeProps[]>(data);
  const [coffeesToCart, setCoffeesToCart] = useState<CoffeeProps[]>([]);
  const [currentDelivery, setCurrentDelivery] = useState({} as CurrentDelivery);

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
        setCoffees,
        coffeesToCart,
        setCoffeesToCart,
        currentDelivery,
        setCurrentDelivery,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  );
}
