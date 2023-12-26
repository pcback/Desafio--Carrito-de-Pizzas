import React, { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import { Button } from "react-bootstrap";

const Carrito = () => {
  const { pizzas, total, setTotal, setPizzas } = useContext(PizzaContext);

  const handleClick = (id, price, resultado) => {
    const index = pizzas.findIndex((p) => p.id === id);

    // console.log(index);
    const pizzasCarrito = [...pizzas];
    if (typeof pizzasCarrito[index].cantidad != "undefined") {
      resultado === "sumar"
        ? pizzasCarrito[index].cantidad++
        : pizzasCarrito[index].cantidad--;
    } else {
      pizzasCarrito[index].cantidad = 1;
    }
    setPizzas([...pizzasCarrito]);
    // setTotal((Prev) => Prev + price);
    console.log(resultado);
    if (resultado === "sumar") {
      setTotal(total + price);
      console.log("sumar");
    } else {
      setTotal(total - price);
      console.log("restar");
    }
    // setTotal(total + pizza.price);
  };

  return (
    <div className="boxCarrito">
      <h4>Detalles del Carrito</h4>
      <hr />
      {pizzas
        .filter((p) => typeof p.cantidad != "undefined" && p.cantidad > 0)
        .map((p) => {
          return (
            <div className="box_carrito_detalles" key={p.id}>
              <div>
                <img className="img_detalle_carrito" src={p.img} alt="imagen" />
              </div>
              <div className="titulo_detalles_carrito">
                <div>{p.name}</div>
                <div>{p.cantidad * p.price}</div>
              </div>
              <div className="btn_carrito_detalle">
                <Button
                  variant="danger"
                  onClick={() => handleClick(p.id, p.price, "restar")}
                >
                  -
                </Button>
                <div>{p.cantidad}</div>
                <Button
                  variant="primary"
                  onClick={() => handleClick(p.id, p.price, "sumar")}
                >
                  +
                </Button>
              </div>
            </div>
          );
        })}
      <hr />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Total a pagar: </h3>
        <h2>{total}</h2>
      </div>
    </div>
  );
};

export default Carrito;
