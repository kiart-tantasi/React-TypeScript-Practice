import { render } from "react-dom";

import App from "./App";
import { UserContextProvider } from "./context/UserContext";

import "./styles.css";

const rootElement = document.getElementById("root");
render(
  <UserContextProvider>
    <App />
  </UserContextProvider>,
  rootElement
);
