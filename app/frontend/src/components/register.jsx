import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import axiosInstance from "../axiosInstance";
const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const registerLog = async (email, username, password1, password2) => {
    const credentials = {
      username,
      email,
      password1,
      password2,
    };
    await axiosInstance
      .post("registro", credentials)
      .then((res) => {
        console.log(res.data);
        if (res.status === 201) {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log(error.response.data);
        console.log(error.message.response);
        setError(error.message);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (password1 !== password2) {
      alert("Las contraseñas no coinciden");
      return;
    }

    registerLog(email, username, password1, password2);
    console.log(error);
  };

  return (
    <div className="login-container">
      <div className="card login-card">
        <div className="card-body">
          <h2 className="card-title text-center">Registro</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">User Name</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password1">Password</label>
              <input
                type="password"
                className="form-control"
                id="password1"
                name="password1"
                value={password1}
                onChange={(e) => setPassword1(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password2">Confirmar Password</label>
              <input
                type="password"
                className="form-control"
                id="password2"
                name="password2"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Registrarse
            </button>
          </form>
          {error && <div className="alert alert-danger mt-3">{error}</div>}
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

export default Register;
