import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";

const Añadir = () => {
  const { pizzas, setPizzas, setTotal } = useContext(PizzaContext);

  const index = pizzas.findIndex((p) => p.id === p.id);

  // console.log(index);
  const pizzasCarrito = [...pizzas];
  if (typeof pizzasCarrito[index].cantidad != "undefined") {
    pizzasCarrito[index].cantidad++;
  } else {
    pizzasCarrito[index].cantidad = 1;
  }
  setPizzas([...pizzasCarrito]);
  setTotal((Prev) => Prev + pizza.price);
  // setTotal(total + pizza.price);
};
export default Añadir;
