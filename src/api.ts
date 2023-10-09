import expresso from "./assets/coffees/expresso.svg";
import americano from "./assets/coffees/americano.svg";
import excremoso from "./assets/coffees/expresso-cremoso.svg";
import exgelado from "./assets/coffees/cafe-gelado.svg";
import cafeleite from "./assets/coffees/cafe-com-leite.svg";
import latte from "./assets/coffees/latte.svg";
import capuccino from "./assets/coffees/capuccino.svg";

export const data = [
  {
    id: 1,
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    url: expresso,
    price: 9.9,
    types: [
      {
        name: "Tradicional",
      },
    ],
    quantity: 1,
  },
  {
    id: 2,
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    url: americano,
    price: 9.9,
    types: [
      {
        name: "Tradicional",
      },
    ],
    quantity: 1,
  },
  {
    id: 3,
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    url: excremoso,
    price: 9.9,
    types: [
      {
        name: "Tradicional",
      },
    ],
    quantity: 1,
  },
  {
    id: 4,
    name: "Expresso Gelado",
    description: "Bebida preparada com café expreso e cubos de gelo",
    url: exgelado,
    price: 9.9,
    types: [
      {
        name: "Tradicional",
      },
      {
        name: "Gelado",
      },
    ],
    quantity: 1,
  },
  {
    id: 5,
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    url: cafeleite,
    price: 9.9,
    types: [
      {
        name: "Tradicional",
      },
      {
        name: "Com leite",
      },
    ],
    quantity: 1,
  },
  {
    id: 6,
    name: "Latte",
    description: "Uma dose de café expresso com dobro de leite e esuma cremosa",
    url: latte,
    price: 9.9,
    types: [
      {
        name: "Tradicional",
      },
      {
        name: "Com leite",
      },
    ],
    quantity: 1,
  },
  {
    id: 7,
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    url: capuccino,
    price: 9.9,
    types: [
      {
        name: "Tradicional",
      },
      {
        name: "Com leite",
      },
    ],
    quantity: 1,
  },
];
