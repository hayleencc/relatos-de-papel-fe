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
const App = () => {
    return (React.createElement("div", { className: "App" },
        React.createElement(CartProvider, null,
            React.createElement(Router, null,
                React.createElement("div", { className: "d-flex flex-column min-vh-100" },
                    React.createElement(Navbar, null),
                    React.createElement("div", { className: "flex-fill" },
                        React.createElement(Routes, null,
                            React.createElement(Route, { path: "/", element: React.createElement(Home, { books: librosMock }) }),
                            React.createElement(Route, { path: "/landing", element: React.createElement(Landing, null) }),
                            React.createElement(Route, { path: "/libros/:id", element: React.createElement(DetallesLibro, null) }),
                            React.createElement(Route, { path: "/checkout", element: React.createElement(Checkout, null) }),
                            React.createElement(Route, { path: "*", element: React.createElement(NotFound, null) }))),
                    React.createElement(Footer, null))))));
};
export default App;
