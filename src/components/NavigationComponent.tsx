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
          <a href="mailto:asocgremial.camionescoquimbo@gmail.com?subject=Cotizar" 
            target="_blank"
            className="nav__link">
            ✉️ asocgremial.camionescoquimbo@gmail.com
          </a>
        </li>
        <li>
          <Link to="/gestion" className="nav__link">
            Gestión
          </Link>
        </li>
        <li>
          <Link to="/acerca-de-nosotros" className="nav__link">
            ¿Quiénes somos?
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
