import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Asegúrate de tener este archivo de estilos

const Navbar = ({ isAuthenticated, currentUser, cartItems, handleLogout, handleIncrease, handleDecrease, handleRemove }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-custom">
            <Link className="navbar-brand" to="/">My Website</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    {isAuthenticated ? (
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/reserva">Reserva</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/panelusuario">Panel de Usuario</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={handleLogout}>Logout</Link>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link user-email">Hola, {currentUser.email}</span>
                            </li>
                            <li className="nav-item cart-icon" onClick={toggleCart}>
                                <span className="cart-count">{getTotalItems()}</span>
                                🛒
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/reserva">Reservas</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
            {isCartOpen && (
                <div className="cart-dropdown">
                    <h3>Mi Carrito</h3>
                    {cartItems.length > 0 ? (
                        cartItems.map(item => (
                            <div key={`${item.id}-${item.horario}`} className="cart-item">
                                <img src={item.imagen} alt={item.nombre} />
                                <p>{item.nombre} {item.horario}</p>
                                <div className="quantity-controls">
                                    <button onClick={() => handleDecrease(item.id, item.horario)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => handleIncrease(item.id, item.horario)}>+</button>
                                    <button onClick={() => handleRemove(item.id, item.horario)} className="remove-button">x</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>El carrito está vacío.</p>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
