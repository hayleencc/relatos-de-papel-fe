import React, { useState, useEffect } from "react";
import { Button, Row, Col, Alert } from "react-bootstrap";

import { useParams } from "react-router-dom";
import { useCart } from "../hooks/useCart";

import librosMock from "../data/libros.js";
import QuantitySelector from "../components/QuantitySelector";
import InfoModal from "../components/InfoModal";

const DetallesLibroContent = ({ onAddToCart }) => {
  const { id } = useParams();
  const { addItemToCart } = useCart();
  const [libro, setLibro] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [alertVisible, setAlertVisible] = useState(false);

  useEffect(() => {
    const libroEncontrado = librosMock.find(
      (libro) => libro.id === parseInt(id)
    );
    setLibro(libroEncontrado);
  }, [id]);

  const handleAddToCart = () => {
    addItemToCart({ ...libro, cantidad });
    onAddToCart();
    setCantidad(1);
  };

  if (!libro) {
    return (
      <InfoModal
        show={true}
        onClose={() => window.history.back()}
        title="Error"
      >
        El libro no ha sido encontrado. Intenta más tarde.
      </InfoModal>
    );
  }

  return (
    <>
      {alertVisible && (
        <Alert
          variant="success"
          dismissible
          onClose={() => setAlertVisible(false)}
        >
          ¡{libro.titulo} ha sido agregado al carrito!
        </Alert>
      )}
      <Row>
        <Col md={8}>
          <h1>{libro.titulo}</h1>
          <h4 className="text-muted">{libro.autor}</h4>
          <p>{libro.descripcion}</p>
          <p>
            <strong>Tipo:</strong> {libro.tipo}
          </p>
          <p>
            <strong>Precio:</strong> ${libro.precio}
          </p>
          <p>
            <strong>Stock:</strong> {libro.stock > 0 ? libro.stock : "Agotado"}
          </p>
          <QuantitySelector
            quantity={cantidad}
            stock={libro.stock}
            onIncrement={() => setCantidad(cantidad + 1)}
            onDecrement={() => setCantidad(cantidad - 1)}
          />
          <Button
            variant="primary"
            onClick={handleAddToCart}
            disabled={libro.stock <= 0}
          >
            {libro.stock > 0 ? `Agregar al carrito` : "No disponible"}
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default DetallesLibroContent;
