import React, { useState } from 'react';
import './reserva.css';

const canchasData = [
    {
        id: 1,
        nombre: 'Cancha sectores populares',
        descripcion: 'Una descripción detallada de la cancha principal.',
        precio: 5,
        horarios: [
            { id: 1, hora_inicio: '2024-07-08T10:00:00', hora_fin: '2024-07-08T11:00:00', disponible: true },
            { id: 2, hora_inicio: '2024-07-08T11:00:00', hora_fin: '2024-07-08T12:00:00', disponible: false },
        ],
        ultima_reservacion: { nombre: 'Juan Perez', fecha: '2024-07-08T11:00:00' },
        messages: ['Bienvenido a la cancha principal', 'Por favor, respete los horarios'],
        imagen: 'https://img.freepik.com/foto-gratis/fotografia-cenital-personas-cancha-baloncesto-parque_181624-8499.jpg?ga=GA1.2.717115157.1709507245&semt=ais_user'
    },
    {
        id: 2,
        nombre: 'Cancha el ultimo recurso',
        descripcion: 'Una descripción detallada de la cancha secundaria.',
        precio: 1,
        horarios: [
            { id: 3, hora_inicio: '2024-07-08T12:00:00', hora_fin: '2024-07-08T13:00:00', disponible: true },
            { id: 4, hora_inicio: '2024-07-08T13:00:00', hora_fin: '2024-07-08T14:00:00', disponible: false },
        ],
        ultima_reservacion: { nombre: 'Maria Garcia', fecha: '2024-07-08T13:00:00' },
        messages: ['Bienvenido a la cancha secundaria', 'Por favor, respete los horarios'],
        imagen: 'https://img.freepik.com/fotos-premium/arboles-edificios-contra-cielo_1048944-19274857.jpg?ga=GA1.2.717115157.1709507245&semt=ais_user'
    },
    {
        id: 3,
        nombre: 'Cancha del boca juniors',
        descripcion: 'Una descripción detallada de la cancha de entrenamiento.',
        precio: 10000,
        horarios: [
            { id: 5, hora_inicio: '2024-07-08T14:00:00', hora_fin: '2024-07-08T15:00:00', disponible: true },
            { id: 6, hora_inicio: '2024-07-08T15:00:00', hora_fin: '2024-07-08T16:00:00', disponible: false },
        ],
        ultima_reservacion: { nombre: 'Carlos Sanchez', fecha: '2024-07-08T15:00:00' },
        messages: ['Bienvenido a la cancha de entrenamiento', 'Por favor, respete los horarios'],
        imagen: 'https://img.freepik.com/fotos-premium/buenos-aires-argentina-mayo-28-2023-foto-aerea-al-atardecer-estadio-boca-juniors-estadio-futbol-argentina-bombonera_206695-1116.jpg?w=826'
    },
    {
        id: 4,
        nombre: 'Cancha premium limpia',
        descripcion: 'Una descripción detallada de la cancha secundaria.',
        precio: 20,
        horarios: [
            { id: 7, hora_inicio: '2024-07-08T12:00:00', hora_fin: '2024-07-08T13:00:00', disponible: true },
            { id: 8, hora_inicio: '2024-07-08T13:00:00', hora_fin: '2024-07-08T14:00:00', disponible: false },
        ],
        ultima_reservacion: { nombre: 'Ana Lopez', fecha: '2024-07-08T13:00:00' },
        messages: ['Bienvenido a la cancha secundaria', 'Por favor, respete los horarios'],
        imagen: 'https://img.freepik.com/fotos-premium/estadio-futbol-renderizado-3d-estadio-futbol-arena-campo-lleno-gente_3544-1361.jpg?ga=GA1.2.717115157.1709507245&semt=sph'
    },
    {
        id: 5,
        nombre: 'Cancha mojada sucia',
        descripcion: 'Una descripción detallada de la cancha secundaria.',
        precio: 15,
        horarios: [
            { id: 9, hora_inicio: '2024-07-08T12:00:00', hora_fin: '2024-07-08T13:00:00', disponible: true },
            { id: 10, hora_inicio: '2024-07-08T13:00:00', hora_fin: '2024-07-08T14:00:00', disponible: false },
        ],
        ultima_reservacion: { nombre: 'Luis Gomez', fecha: '2024-07-08T13:00:00' },
        messages: ['Bienvenido a la cancha secundaria', 'Por favor, respete los horarios'],
        imagen: 'https://img.freepik.com/fotos-premium/estadio-futbol-gradas-llenas-fanaticos-esperando-juego-nocturno_207634-2442.jpg?w=740'
    },
    {
        id: 6,
        nombre: 'Cancha Bonita feliz',
        descripcion: 'Una descripción detallada de la cancha secundaria.',
        precio: 15,
        horarios: [
            { id: 11, hora_inicio: '2024-07-08T12:00:00', hora_fin: '2024-07-08T13:00:00', disponible: true },
            { id: 12, hora_inicio: '2024-07-08T13:00:00', hora_fin: '2024-07-08T14:00:00', disponible: false },
        ],
        ultima_reservacion: { nombre: 'Sofia Martinez', fecha: '2024-07-08T13:00:00' },
        messages: ['Bienvenido a la cancha secundaria', 'Por favor, respete los horarios'],
        imagen: 'https://img.freepik.com/fotos-premium/arena-estadio-futbol-nocturno-fanaticos-multitud-render-fotografico-alta-calidad_336913-310.jpg?ga=GA1.2.717115157.1709507245&semt=sph'
    },
    {
        id: 7,
        nombre: 'Futbolin Urdesa friendly',
        descripcion: 'Una descripción detallada de la cancha secundaria.',
        precio: 10,
        horarios: [
            { id: 13, hora_inicio: '2024-07-08T12:00:00', hora_fin: '2024-07-08T13:00:00', disponible: true },
            { id: 14, hora_inicio: '2024-07-08T13:00:00', hora_fin: '2024-07-08T14:00:00', disponible: false },
        ],
        ultima_reservacion: { nombre: 'Diego Alvarez', fecha: '2024-07-08T13:00:00' },
        messages: ['Bienvenido a la cancha secundaria', 'Por favor, respete los horarios'],
        imagen: 'https://img.freepik.com/fotos-premium/jovenes-sonrientes-jugando-al-futbolin-sus-vacaciones_146671-20545.jpg?w=900'
    },
    {
        id: 8,
        nombre: 'Cancha Parking Policentro',
        descripcion: 'Una descripción detallada de la cancha secundaria.',
        precio: 2,
        horarios: [
            { id: 15, hora_inicio: '2024-07-08T12:00:00', hora_fin: '2024-07-08T13:00:00', disponible: true },
            { id: 16, hora_inicio: '2024-07-08T13:00:00', hora_fin: '2024-07-08T14:00:00', disponible: false },
        ],
        ultima_reservacion: { nombre: 'Camila Torres', fecha: '2024-07-08T13:00:00' },
        messages: ['Bienvenido a la cancha secundaria', 'Por favor, respete los horarios'],
        imagen: 'https://img.freepik.com/fotos-premium/carril-estacionamiento-estacionamiento-vacio-al-aire-libre-parque_34362-1727.jpg?w=900'
    },
    {
        id: 9,
        nombre: 'Calle Ayacucho despejada',
        descripcion: 'Una descripción detallada de la cancha secundaria.',
        precio: 0,
        horarios: [
            { id: 17, hora_inicio: '2024-07-08T12:00:00', hora_fin: '2024-07-08T13:00:00', disponible: true },
            { id: 18, hora_inicio: '2024-07-08T13:00:00', hora_fin: '2024-07-08T14:00:00', disponible: false },
        ],
        ultima_reservacion: { nombre: 'Camila Torres', fecha: '2024-07-08T13:00:00' },
        messages: ['Bienvenido a la cancha secundaria', 'Por favor, respete los horarios'],
        imagen: 'https://img.freepik.com/foto-gratis/jovenes-calles-londres_23-2149377211.jpg?t=st=1720464866~exp=1720468466~hmac=0abc073ee34d086e7c1fc092414098d6021254a6bcfc845a58e109f627fb845d&w=900'
    },
];

const Reserva = ({ onAddToCart }) => {
    const [selectedCancha, setSelectedCancha] = useState(null);
    const [filterStartTime, setFilterStartTime] = useState('');
    const [filterEndTime, setFilterEndTime] = useState('');
    const [sortAvailableFirst, setSortAvailableFirst] = useState(false);

    const handleReservar = (cancha, horario) => {
        onAddToCart({ ...cancha, horario: `${new Date(horario.hora_inicio).toLocaleString()} - ${new Date(horario.hora_fin).toLocaleString()}`, horarioId: horario.id });
    };

    const handleMoreInfo = (cancha) => {
        setSelectedCancha(cancha);
    };

    const closeModal = () => {
        setSelectedCancha(null);
    };

    const filterCanchas = (canchas) => {
        return canchas.filter(cancha => {
            return cancha.horarios.some(horario => {
                const startTime = new Date(horario.hora_inicio).getHours();
                const endTime = new Date(horario.hora_fin).getHours();
                const filterStart = filterStartTime ? parseInt(filterStartTime) : 0;
                const filterEnd = filterEndTime ? parseInt(filterEndTime) : 24;

                return startTime >= filterStart && endTime <= filterEnd;
            });
        });
    };

    const sortCanchas = (canchas) => {
        if (!sortAvailableFirst) return canchas;
        return canchas.sort((a, b) => {
            const aAvailable = a.horarios.some(horario => horario.disponible);
            const bAvailable = b.horarios.some(horario => horario.disponible);
            return aAvailable === bAvailable ? 0 : aAvailable ? -1 : 1;
        });
    };

    const filteredCanchas = sortCanchas(filterCanchas(canchasData));

    const renderHourOptions = () => {
        const hours = [];
        for (let i = 0; i < 24; i++) {
            hours.push(<option key={i} value={i}>{i}:00</option>);
        }
        return hours;
    };

    return (
        <div className="reserva-container">
            <h1>Reserva de Canchas</h1>
            <div className="filters">
                <label>
                    Filtrar desde la hora:
                    <select value={filterStartTime} onChange={(e) => setFilterStartTime(e.target.value)}>
                        <option value="">Cualquier hora</option>
                        {renderHourOptions()}
                    </select>
                </label>
                <label>
                    Filtrar hasta la hora:
                    <select value={filterEndTime} onChange={(e) => setFilterEndTime(e.target.value)}>
                        <option value="">Cualquier hora</option>
                        {renderHourOptions()}
                    </select>
                </label>
                <label>
                    Ordenar disponibles primero:
                    <input
                        type="checkbox"
                        checked={sortAvailableFirst}
                        onChange={() => setSortAvailableFirst(!sortAvailableFirst)}
                    />
                </label>
            </div>
            <div className="cancha-list">
                {filteredCanchas.map(cancha => (
                    <div key={cancha.id} className="cancha-card">
                        <h2>{cancha.nombre}</h2>
                        <img src={cancha.imagen} alt={cancha.nombre} className="cancha-image" />
                        <h5>Precio por Hora: ${cancha.precio}</h5>
                        <button onClick={() => handleMoreInfo(cancha)} className="more-info-button">Más información</button>
                    </div>
                ))}
            </div>
            {selectedCancha && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>{selectedCancha.nombre}</h2>
                        <img src={selectedCancha.imagen} alt={selectedCancha.nombre} className="modal-image" />
                        <p>{selectedCancha.descripcion}</p>
                        <h5>Precio por Hora: ${selectedCancha.precio}</h5>
                        <div>
                            {selectedCancha.messages.map((message, index) => (
                                <div key={index}>{message}</div>
                            ))}
                        </div>
                        <h3>Horarios Disponibles</h3>
                        {selectedCancha.horarios.length > 0 ? (
                            selectedCancha.horarios.map(horario => (
                                <div key={horario.id}>
                                    <p>Inicio: {new Date(horario.hora_inicio).toLocaleString()}</p>
                                    <p>Fin: {new Date(horario.hora_fin).toLocaleString()}</p>
                                    <button onClick={() => handleReservar(selectedCancha, horario)}>Reservar</button>
                                </div>
                            ))
                        ) : (
                            <p>No hay horarios disponibles.</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Reserva;
