import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";
import { Button } from "react-bootstrap";

const Detalle = () => {
  const { id } = useParams();
  const { pizzas, setPizzas, setTotal } = useContext(PizzaContext);

  const index = pizzas.findIndex((p) => p.id === id);
  const pizzaActual = pizzas[index];

  const handleClick = (pizza) => {
    const index = pizzas.findIndex((p) => p.id === pizza.id);

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

  return (
    <div className="box_detalles">
      <div>
        <img src={pizzaActual.img} alt="" style={{ width: "30vw" }} />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>{pizzaActual.name}</p>
        <p>{pizzaActual.desc}</p>
        <Button variant="danger" onClick={() => handleClick(pizzaActual)}>
          Añadir
        </Button>
      </div>
    </div>
  );
};

export default Detalle;
