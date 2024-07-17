import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";

import axiosInstance from "../axiosInstance";
const Login = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async (username, password) => {
    const credentials = {
      username: username,
      password: password,
    };
    await axiosInstance
      .post("login", JSON.stringify(credentials))
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          navigate("/panelusuario");
        }
      })
      .catch((error) => {
        console.log("Error al iniciar sesion");
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    login(email, password);
  };

  return (
    <div className="login-container">
      <div className="card login-card">
        <div className="card-body">
          <h2 className="card-title text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">User Name</label>
              <input
                type="text"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Login
            </button>
          </form>
          <div className="mt-3">
            <Link to="/forgotpassword" className="btn btn-link">
              ¿Olvidaste tu contraseña?
            </Link>
            <Link to="/registro" className="btn btn-link">
              ¿No tienes cuenta? Regístrate
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
