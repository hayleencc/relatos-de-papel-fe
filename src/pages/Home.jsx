import React, { useState, useEffect } from "react";
import SearchBar from "../components/Searchbar";
import BookCard from "../components/BookCard";
import { Container, Row, Col } from "react-bootstrap";
import LoadingSpinner from "../components/LoadingSpinner";
import LandingModal from "../components/LandingModal";
import Cart from "../components/Cart";

const Home = ({ books }) => {
  const [librosFiltrados, setLibrosFiltrados] = useState(books);
  const [loading, setLoading] = useState(true);
  const [showLanding, setShowLanding] = useState(true);

  const handleShowLanding = () => {
    setShowLanding(false);
  };

  const showLoading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleSearch = (searchInput) => {
    const resultadoFiltrado = books.filter((book) => {
      return book.titulo.toLowerCase().includes(searchInput.toLowerCase());
    });
    setLibrosFiltrados(resultadoFiltrado);
  };

  useEffect(() => {
    showLoading();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Container>
      <h1 className="mt-4">Catálogo de Libros</h1>
      <hr />
      <p>
        Explora nuestra selección de libros o busca tus favoritos con la barra
        de búsqueda.
      </p>
      <SearchBar onSearch={handleSearch} />

      <Row className="mt-4">
        <Col md={8} className="home__catalog d-flex flex-wrap">
          {librosFiltrados.length > 0 ? (
            librosFiltrados.map((book) => (
              <div key={book.id} className="mb-4" style={{ width: "50%" }}>
                <BookCard book={book} />
              </div>
            ))
          ) : (
            <p>No se encontraron libros que coincidan con tu búsqueda.</p>
          )}
        </Col>

        <Col md={4} className="home__cart">
          <Cart />
        </Col>
      </Row>

      <LandingModal show={showLanding} onClose={handleShowLanding} />
    </Container>
  );
};

export default Home;
