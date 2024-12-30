import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Landing from './pages/Landing';
import DetallesLibro from './pages/Libro';
import Checkout from './pages/Checkout';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import librosMock from './data/libros.js';
import NotFound from './pages/NotFound';
import { CartProvider } from "./hooks/useCart";
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <div className="d-flex flex-column min-vh-100"> 
            <Navbar />
            <div className="flex-fill"> 
              <Routes>
                <Route path="/" element={<Home books={librosMock}/>} />
                <Route path="/landing" element={<Landing />} />
                <Route path="/libros/:id" element={<DetallesLibro />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App; 
