import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Reserva from "./components/reserva";
import Footer from "./components/footer";
import Login from "./components/login";
import Register from "./components/register";
import ForgotPassword from "./components/forgotpassword";
import PanelUsuario from "./components/panelusuario";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Asegúrate de importar el archivo CSS

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser) {
      setCurrentUser(storedUser);
    }
  }, []);

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (i) => i.id === item.id && i.horario === item.horario
      );
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id && i.horario === item.horario
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const handleIncrease = (id, horario) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.horario === horario
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleDecrease = (id, horario) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id && item.horario === horario && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveFromCart = (id, horario) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => !(item.id === id && item.horario === horario))
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    window.location.href = "/login"; // Redirige al login
  };

  return (
    <Router>
      <div id="root">
        <Navbar
          isAuthenticated={!!currentUser}
          currentUser={currentUser}
          cartItems={cartItems}
          handleLogout={handleLogout}
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
          handleRemoveFromCart={handleRemoveFromCart}
        />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/reserva"
              element={<Reserva onAddToCart={handleAddToCart} />}
            />
            <Route
              path="/login"
              element={<Login setCurrentUser={setCurrentUser} />}
            />
            <Route path="/registro" element={<Register />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route
              path="/panelusuario"
              element={
                <PanelUsuario handleRemoveFromCart={handleRemoveFromCart} />
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
