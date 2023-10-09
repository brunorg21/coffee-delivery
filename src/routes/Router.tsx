import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Home } from "../pages/Home/Home";
import { Cart } from "../pages/Cart/Cart";
import { Summary } from "../pages/Summary/Summary";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/summary" element={<Summary />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
