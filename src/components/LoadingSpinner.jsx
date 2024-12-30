import React from "react";
import { Spinner } from "react-bootstrap";

const LoadingSpinner = () => {
  return (
    <div className="text-center" style={{ marginTop: "50px" }}>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Cargando...</span>
      </Spinner>
      <p>Cargando...</p>
    </div>
  );
};

export default LoadingSpinner;
