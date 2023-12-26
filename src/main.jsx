import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import PizzaContextProvider from "./context/PizzaContext.jsx";
import "./assets/css/index.css";
//importando ruta de bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PizzaContextProvider>
      <App />
    </PizzaContextProvider>
  </React.StrictMode>
);
