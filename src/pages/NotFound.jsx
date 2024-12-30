import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/NotFound.css"; 

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); 
  };

  return (
    <Container className="not-found text-center">
      <h1>404 - Página No Encontrada</h1>
      <p>Lo sentimos, pero la página que estás buscando no existe.</p>
      <p>Puede que haya sido eliminada, o quizás nunca existió.</p>
      <Button variant="primary" onClick={handleGoHome}>
        Volver a la Página Principal
      </Button>
    </Container>
  );
};

export default NotFound;
