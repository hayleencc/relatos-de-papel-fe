import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/LandingModal.css";

const LandingModal = ({ show, onClose }) => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(5);
  const [isInteracting, setIsInteracting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (isInteracting) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          navigate("/");
          onClose();
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isInteracting, navigate, onClose]);

  const handleInteraction = () => {
    setIsInteracting(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose} className="landing-modal">
      <Modal.Header closeButton className="landing-modal__header">
        <Modal.Title className="landing-modal__title">
          Bienvenido a Relatos de Papel
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="landing-modal__body">
        <p className="landing-modal__text">
          Descubre el mundo de la literatura y encuentra los mejores relatos
          junto a nosotros. Deja tus datos para mantenerte al día con nuestras
          novedades.
        </p>
        <Form onChange={handleInteraction} onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name" className="landing-modal__form-label">
              Nombre
            </Form.Label>
            <Form.Control
              type="text"
              id="name"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="email" className="landing-modal__form-label">
              Correo Electrónico
            </Form.Label>
            <Form.Control
              type="email"
              id="email"
              placeholder="ejemplo@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Button type="submit" className="landing-modal__button--success">
            Registrarse
          </Button>
        </Form>
        {!isInteracting && (
          <p className="landing-modal__timer">
            Serás redirigido a la pagina principal en <span>{timeLeft}</span>{" "}
            segundos...
          </p>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default LandingModal;
