import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

import "../styles/BookCard.css";

const BookCard = ({ book }) => {
  const { addItemToCart } = useCart();

  const handleAddToCart = () => {
    addItemToCart(book);
  };

  return (
    <div className="book-card">
      <div className="book-card__body">
        <h5 className="book-card__title">{book.titulo}</h5>
        <p className="book-card__author">Autor: {book.autor}</p>
        <p className="book-card__price">Precio: ${book.precio}</p>
        <div className="book-card__actions">
          <Link
            to={`/libros/${book.id}`}
            className="btn btn-primary book-card__button"
          >
            Ver más
          </Link>
          <button
            className="btn btn-success book-card__button"
            onClick={handleAddToCart}
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
