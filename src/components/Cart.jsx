import React from "react";
import { Button, Card } from "react-bootstrap";
import { useCart } from "../hooks/useCart";
import "../styles/Cart.css"; 

const Cart = () => {
  const { cartItems, calculateTotalPrice, removeItemFromCart } = useCart();

  return (
    <Card className="cart sticky-top p-3">
      <Card.Header className="cart__header">Resumen del Carrito</Card.Header>
      <Card.Body className="cart__body">
        {cartItems.length === 0 ? (
          <p>No hay artículos en el carrito.</p>
        ) : (
          <>
            <ul className="list-unstyled cart__items">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="cart__item d-flex justify-content-between align-items-center"
                >
                  <span className="cart__item-info">
                    {item.titulo} - ${item.precio} x {item.cantidad}
                  </span>
                  <Button
                    variant="danger"
                    onClick={() => removeItemFromCart(item.id)}
                    className="cart__item-remove"
                  >
                    Eliminar
                  </Button>
                </li>
              ))}
            </ul>
            <p className="cart__total">
              Total a pagar: ${calculateTotalPrice().toFixed(2)}
            </p>
            <Button
              variant="primary"
              className="cart__checkout"
              href="/checkout"
            >
              Proceder al Checkout
            </Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default Cart;
