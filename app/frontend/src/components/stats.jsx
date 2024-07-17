import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './stats.css';

const statsData = [
    {
        image: "https://img.freepik.com/foto-gratis/jugador-futbol-masculino-pelota-campo-hierba_23-2150821524.jpg?ga=GA1.1.717115157.1709507245&semt=ais_user",
        title: "600k",
        subtitle: "Usuarios"
    },
    {
        image: "https://img.freepik.com/vector-gratis/fondo-campo-futbol-estilo-degradado_23-2148995842.jpg?ga=GA1.1.717115157.1709507245&semt=sph",
        title: "500+",
        subtitle: "Clubes"
    },
    {
        image: "https://img.freepik.com/vector-gratis/coleccion-elementos-banderas-america-sur-diseno-plano_23-2149717794.jpg?ga=GA1.1.717115157.1709507245&semt=sph",
        title: "9",
        subtitle: "Países"
    },
    {
        image: "https://img.freepik.com/foto-gratis/retrato-joven-emocionado-mirando-su-telefono-inteligente-sosteniendo-pelota_23-2149375003.jpg?ga=GA1.1.717115157.1709507245&semt=ais_user",
        title: "8+",
        subtitle: "Millones de reservas"
    }
];

const Stats = () => {
    return (
        <div className="stats-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="stats-title">Nuestros números nos avalan</h2>
                        <p className="stats-subtitle">No son solo cifras, detrás hay confianza de nuestros usuarios y clientes.</p>
                    </div>
                    <div className="col-md-6 d-flex flex-wrap">
                        {statsData.map((stat, index) => (
                            <div className="col-md-6 mb-4" key={index}>
                                <div className="stat-card" style={{ backgroundImage: `url(${stat.image})` }}>
                                    <div className="stat-card-content">
                                        <h3 className="stat-card-title">{stat.title}</h3>
                                        <p className="stat-card-subtitle">{stat.subtitle}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;

