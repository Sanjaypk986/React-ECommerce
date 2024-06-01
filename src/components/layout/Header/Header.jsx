import React, { useState } from "react";
import { Link } from "react-router-dom";
import Offer from "./Offer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

const Header = ({ addToCart }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <Offer />
      <header>
        <div className="headerDiv container px-7 py-4 flex flex-row justify-between gap-3 items-center">
          <span className="text-2xl lg:text-4xl L:mx-10">
            <Link to="/">VogueVista</Link>
          </span>
          <div className="hidden sm:flex w-2/4 flex-row justify-between items-center rounded-xl gap-2 border-2 py-1 px-5 lg:px-10">
            <input
              className="w-full border-0"
              type="text"
              placeholder="Search Produts"
            />
            <span>
              <i class="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>
          <button className="lg:hidden" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <nav
            className={`lg:flex lg:justify-between lg:items-center lg:gap-10 ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col lg:flex-row items-center gap-4 lg:text-xl">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li className="relative">
                <Link to="/cart" className="block">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="text-gray-500 hover:text-gray-700"
                    size="1x"
                  />
                </Link>
                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-400 text-white px-1 py-0.5 rounded-full text-xs flex items-center justify-center">
                  0
                </span>
              </li>

              <li>
                <Link to="/account">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-gray-500 hover:text-gray-700"
                    size="1x"
                  />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
