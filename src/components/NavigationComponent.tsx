import React from "react";
import { Link } from "react-router-dom";
import cartPng from "../assets/png/cart.png";
import { useAppContext } from "../context/AppCtx";

const Navigation: React.FC = () => {
  const { cartItems, totalCart } = useAppContext();
  const cartQuantity = cartItems.reduce((acc, item) => item.quantity + acc, 0);
  
  return (
    <nav className="nav">
      <ul className="nav__container">
        <li>
          <Link to="/" className="nav__link">
            📞 Teléfono +56 2 261 101 70
          </Link>
        </li>
        <li>
          <a href="mailto:asocgremial.camionescoquimbo@gmail.com?subject=Cotizar ${argumento}"
            target="_blank"
            className="nav__link">
            ✉️ 
          </a>
        </li>
        <li>
          <Link to="/servicios" className="nav__link">
            Servicios
          </Link>
        </li>
        <li>
          <Link to="/acerca-de-nosotros" className="nav__link">
            ¿Quiénes somos?
          </Link>
        </li>
        <li>
          <Link to="/contacto" className="nav__link">
            Contactanos
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
