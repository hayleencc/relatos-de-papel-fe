import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "../styles/Landing.css";

const Landing = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Gracias por suscribirte!");
  };

  return (
    <Container className="landing-page text-center">
      <h1 className="landing-page__title">
        ¡Sumérgete en nuevas historias hoy y descubre el placer de leer! 🎉
      </h1>
      <Row className="align-items-center">
        <Col md={6}>
          <img
            src="src/assets/libreria-img.webp"
            alt="Libros"
            className="landing-page__image"
          />
        </Col>
        <Col md={6}>
          <p className="landing-page__description">
            En <strong>Relatos de Papel</strong>, te ofrecemos una amplia
            selección de libros que inspiran, educan y entretienen. Desde
            novelas clásicas hasta las últimas novedades en literatura
            contemporánea, tenemos algo para cada amante de los libros. 🌟
            <br />
            <br />
            Nuestro compromiso es brindarte una experiencia única:
            <div className="landing-page__benefits">
              <p>📖 Variedad: Encuentra libros de todos los géneros.</p>
              <p>🌈 Recomendaciones personalizadas basadas en tus gustos.</p>
              <p>🚚 Envío rápido y seguro a tu puerta.</p>
              <p>
                💌 Suscríbete para recibir actualizaciones y ofertas exclusivas.
              </p>
            </div>
            -{" "}
          </p>
        </Col>
      </Row>
      <div className="landing-page__divider">
        <h2 className="landing-page__subtitle">¡Suscríbete ahora! ✉️</h2>
        <Form onSubmit={handleSubmit} className="landing-page__form">
          <Form.Group controlId="formName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="ejemplo@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="landing-page__button"
          >
            Suscribirse
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Landing;
