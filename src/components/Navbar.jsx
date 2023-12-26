import React, { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import { Button } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import carrito from "../assets/img/carrito.png";
import pizza1 from "../assets/img/pizza1.svg";
import pizza2 from "../assets/img/pizza2.png";
import pizza3 from "../assets/img/pizza3.png";

const Navbar = () => {
  const { total } = useContext(PizzaContext);
  const Navigate = useNavigate();

  const verCarrito = (e) => {
    Navigate("/carrito");
  };
  return (
    <div className="box_navbar">
      <marquee className="slider_navbar">
        <img src={pizza1} alt="" style={{ width: "2rem" }} />
        <span className="text_pizza_banner">Pizza en promociones 2 x 1000</span>
        <img src={pizza2} alt="" style={{ width: "2rem" }} />
        <span className="text_pizza_banner">Pizza en ofertas 3 x 1000</span>
        <img src={pizza3} alt="" style={{ width: "2rem" }} />
        <span className="text_pizza_banner">Pizza sabrosas 4 x 5000</span>
        <img src={pizza3} alt="" style={{ width: "2rem" }} />
        <img src={pizza1} alt="" style={{ width: "2rem" }} />
        <span className="text_pizza_banner">Pizza en promociones 2 x 1000</span>
        <img src={pizza2} alt="" style={{ width: "2rem" }} />
        <span className="text_pizza_banner">Pizza en ofertas 3 x 1000</span>
        <img src={pizza3} alt="" style={{ width: "2rem" }} />
        <span className="text_pizza_banner">Pizza sabrosas 4 x 5000</span>
        <img src={pizza3} alt="" style={{ width: "2rem" }} />
        <img src={pizza1} alt="" style={{ width: "2rem" }} />
        <span className="text_pizza_banner">Pizza en promociones 2 x 1000</span>
        <img src={pizza2} alt="" style={{ width: "2rem" }} />
        <span className="text_pizza_banner">Pizza en ofertas 3 x 1000</span>
        <img src={pizza3} alt="" style={{ width: "2rem" }} />
        <span className="text_pizza_banner">Pizza sabrosas 4 x 5000</span>
        <img src={pizza3} alt="" style={{ width: "2rem" }} />
      </marquee>
      <NavLink to="/">
        <button className="btn_inicio_navbar">
          <p className="inicio_btn">
            Menu <br /> Pizzas
          </p>
        </button>
      </NavLink>
      <img
        className="img_navbar"
        src="https://mammamiapizzanapanee.com/wp-content/uploads/2019/11/mamma-mia-pizza-logo-web.png"
        alt="imgPizza"
      />
      <div className="box_carrito_y_total">
        <div className="box_carrito">
          <img
            className="icon_carrito"
            src={carrito}
            alt="aaa"
            onClick={(e) => verCarrito(e)}
          />
        </div>
        <div className="box_valor_total">
          <span className="text_valor_total">${total}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
