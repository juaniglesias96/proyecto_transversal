import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para manejar la recuperación de contraseña
        console.log(`Email: ${email}`);
        // Redirigir al componente de Login después de manejar la recuperación
        navigate('/login');
    };

    return (
        <div className="login-container">
            <div className="card login-card">
                <div className="card-body">
                    <h2 className="card-title text-center">Recuperar Contraseña</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Enviar</button>
                    </form>
                    <div className="mt-3">
                        <Link to="/login" className="btn btn-link">
                            Volver al Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
