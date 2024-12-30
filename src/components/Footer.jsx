import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Sobre Nosotros</h5>
            <p>
              Relatos de Papel es tu tienda en línea para descubrir y comprar
              los mejores libros.
            </p>
          </Col>
          <Col md={4}>
            <h5>Enlaces Útiles</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href="/checkout">Carrito</a>
              </li>
              <li>
                <a href="/landing">Contacto</a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contacto</h5>
            <p>Email: contacto@relatosdepapel.com</p>
            <p>Teléfono: +123 456 7890</p>
          </Col>
        </Row>
        <div className="text-center mt-4">
          <p>
            &copy; {new Date().getFullYear()} Relatos de Papel. Todos los
            derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
