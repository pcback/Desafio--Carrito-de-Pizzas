import { PizzaContext } from "../context/PizzaContext";
import React, { useContext } from "react";
import Pizza from "./Pizza";

const Gallery = () => {
  const { pizzas } = useContext(PizzaContext);
  // console.log(pizzas);
  return (
    <div className="box_cards">
      {/* {console.log(pizzas)} */}
      {pizzas.map((p) => {
        // return <p key={p.id}>{p.id}</p>;
        return <Pizza pizza={p} key={p.id}></Pizza>;
      })}
    </div>
  );
};

export default Gallery;
