import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import iconData from '../iconos'; // Asegúrate de que la ruta sea correcta
import './features.css';


const Features = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Características Principales</h2>
            <p className="text-center mb-5">En pocos pasos, con nuestra app podrás reservar tu espacio para practicar tu deporte favorito.</p>
            <div className="row">
                {iconData.map((icon, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card mb-4 shadow-sm">
                            <div className="card-body text-center">
                                <img src={icon.src} alt={icon.alt} className="mb-3" />
                                <h5 className="card-title">{icon.title}</h5>
                                <p className="card-text">{icon.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
