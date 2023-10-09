import { ReactNode } from "react";
import { FilterButtonContainer } from "./styles";

interface FilterButtonProps {
  children: ReactNode;
}

export function FilterButton({ children }: FilterButtonProps) {
  return <FilterButtonContainer>{children}</FilterButtonContainer>;
}
