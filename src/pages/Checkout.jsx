import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useCart } from "../hooks/useCart";
import QuantitySelector from "../components/QuantitySelector"; 
import MessageModal from "../components/MessageModal";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const {
    setCartItems,
    cartItems,
    removeItemFromCart,
    calculateTotalPrice,
    updateItemQuantity,
    calculateAllCartItems,
    setTotalItems,
    totalItems,
  } = useCart();

  const [showSucess, setShowSuccess] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [messageType, setMessageType] = useState("success");
  const [messageContent, setMessageContent] = useState("");
  const navigate = useNavigate();

  const handleCheckout = () => {
    const isSuccess = true;

    if (isSuccess) {
      setMessageType("success");
      setMessageContent(
        "¡Tu compra ha sido realizada con éxito! Pronto recibiras un correo con mas informacion de la entrega."
      );
      setCartItems([]);
      setTotalItems(0);
    } else {
      setMessageType("error");
      setMessageContent(
        "Hubo un problema al procesar tu compra. Intenta nuevamente."
      );
    }

    setShowMessage(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleAfterClose = () => {
    setShowMessage(false);
    navigate("/");
  };

  useEffect(() => {
    setTotalItems(calculateAllCartItems());
  }, [cartItems, setTotalItems, calculateAllCartItems]);

  return (
    <Container>
      <h1 className="mt-4">Carrito de Compras</h1>
      <Row className="mt-4">
        <Col md={8}>
          {cartItems.length === 0 ? (
            <h4>No hay artículos en el carrito.</h4>
          ) : (
            cartItems.map((item) => (
              <Card key={item.id} className="mb-3">
                <Card.Body>
                  <Card.Title>{item.titulo}</Card.Title>
                  <Card.Text>Precio unitario: ${item.precio}</Card.Text>
                  <Card.Text>
                    Precio total: ${(item.precio * item.cantidad).toFixed(2)}
                  </Card.Text>

                  <QuantitySelector
                    quantity={item.cantidad}
                    stock={item.stock}
                    onIncrement={() =>
                      updateItemQuantity(item.id, item.cantidad + 1)
                    }
                    onDecrement={() =>
                      updateItemQuantity(item.id, item.cantidad - 1)
                    }
                  />

                  <Button
                    variant="danger"
                    onClick={() => removeItemFromCart(item.id)}
                  >
                    Eliminar
                  </Button>
                </Card.Body>
              </Card>
            ))
          )}
        </Col>

        <Col md={4}>
          <div className="p-4 border rounded">
            <h4>Resumen del Carrito</h4>
            <p>Total de libros: {cartItems.length}</p>
            <p>Total de artículos: {totalItems}</p>
            <p>Total a pagar: ${calculateTotalPrice().toFixed(2)}</p>
            <Button
              variant="success"
              className="w-100"
              onClick={handleCheckout}
            >
              Finalizar Compra
            </Button>
          </div>
        </Col>
      </Row>
      <MessageModal
        show={showMessage}
        onClose={() => handleAfterClose()}
        title={
          messageType === "success" ? "Compra Exitosa" : "Error en la compra"
        }
        message={messageContent}
        variant={messageType}
      />
    </Container>
  );
};

export default Checkout;
