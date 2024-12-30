import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import { useCart } from "../hooks/useCart";

const Navbar = () => {
  const { calculateTotalItems } = useCart();
  const navigate = useNavigate();

  const handleClick = (path) => {
    const offcanvas = document.querySelector(".offcanvas");
    const backdrop = document.querySelector(".offcanvas-backdrop");
    if (offcanvas) offcanvas.classList.remove("show");
    if (backdrop) backdrop.remove();
    navigate(path);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Relatos de Papel
        </Link>
        <div className="search"></div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-start"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => handleClick("/")}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => handleClick("/checkout")}
                >
                  Carrito{" "}
                  <span className="badge bg-primary">
                    {calculateTotalItems()}
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => handleClick("/landing")}
                >
                  Landing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
