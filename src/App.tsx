import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalStyles";
import { Router } from "./routes/Router";
import { defaultTheme } from "./styles/themes/default";
import { CoffeesContextProvider } from "./context/CoffeesContext";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CoffeesContextProvider>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <GlobalStyle />
          <Router />
        </CoffeesContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
