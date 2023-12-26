import React, { useContext } from "react";
import { Button, Card, CardText } from "react-bootstrap";
import { PizzaContext } from "../context/PizzaContext";
// import { Prev } from "react-bootstrap/esm/PageItem";
import { useNavigate } from "react-router-dom";

const Pizza = ({ pizza }) => {
  const { pizzas, setPizzas, setTotal } = useContext(PizzaContext);
  const navigate = useNavigate();

  const handleClick = () => {
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

  const handleDetalle = () => {
    navigate(`/detalle/${pizza.id}`);
  };
  return (
    <Card key={pizza.id} style={{ width: "25rem" }}>
      <Card.Img variant="top" src={pizza.img} />
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>

        <CardText>{pizza.desc}</CardText>
        <CardText>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "baseline",
            }}
          >
            {pizza.ingredients.map((p, index) => {
              return (
                <ul>
                  <li key={index}>{p}</li>
                </ul>
              );
            })}
          </div>
        </CardText>
        <div className="btn_card">
          <Button variant="primary" onClick={handleDetalle}>
            Detalles
          </Button>
          <Button variant="danger" onClick={handleClick}>
            Añadir
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Pizza;
