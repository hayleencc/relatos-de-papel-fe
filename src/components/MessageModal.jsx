import React from "react";
import { Modal, Button } from "react-bootstrap";

const MessageModal = ({ show, onClose, title, message, variant }) => {
  const bgColor =
    variant === "success"
      ? "bg-success"
      : variant === "error"
      ? "bg-danger"
      : "bg-info";
  const textColor = "text-white";

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton className={bgColor}>
        <Modal.Title className={textColor}>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MessageModal;
