import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cart from "../components/Cart"; 
import DetallesLibroContent from "../components/DetailsBookContent";

const DetallesLibro = () => {
  const [alertVisible, setAlertVisible] = useState(false);

  const handleAddToCart = () => {
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 3000);
  };

  return (
    <Container style={{ marginTop: "2rem" }}>
      <Row className="mt-4">
        <Col md={8}>
          <DetallesLibroContent onAddToCart={handleAddToCart} />
        </Col>
        <Col md={4} className="home__cart">
          <Cart />
        </Col>
      </Row>
    </Container>
  );
};

export default DetallesLibro;
