import React, { useState, useEffect } from 'react';

const PanelUsuario = ({ handleRemoveFromCart }) => {
    const [reservas, setReservas] = useState([]);
    const [historialPagos, setHistorialPagos] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const reservasGuardadas = JSON.parse(localStorage.getItem('cartItems')) || [];
        setReservas(reservasGuardadas);

        const historialGuardado = JSON.parse(localStorage.getItem('historialPagos')) || [];
        setHistorialPagos(historialGuardado);

        const user = JSON.parse(localStorage.getItem('currentUser'));
        setCurrentUser(user);
    }, []);

    const handlePago = (reserva) => {
        const newHistorialPagos = [...historialPagos, {
            ...reserva,
            fecha_pago: new Date(),
            monto: reserva.precio * reserva.quantity,
            orden: historialPagos.length + 1
        }];

        const newReservas = reservas.filter(r => !(r.id === reserva.id && r.horario === reserva.horario));

        setReservas(newReservas);
        setHistorialPagos(newHistorialPagos);

        localStorage.setItem('cartItems', JSON.stringify(newReservas));
        localStorage.setItem('historialPagos', JSON.stringify(newHistorialPagos));
        handleRemoveFromCart(reserva.id, reserva.horario);
    };

    return (
        <div className="panel-usuario">
            <h2>Panel de Usuario</h2>
            <div className="reservas-section">
                <h3>Mis Reservas</h3>
                <ul>
                    {reservas.map((reserva, index) => (
                        <li key={index}>
                            {`Producto: ${reserva.nombre}, Hora Inicio: ${new Date(reserva.horario.split(" - ")[0]).toLocaleString()}, Hora Fin: ${new Date(reserva.horario.split(" - ")[1]).toLocaleString()}, Cantidad: ${reserva.quantity}`}
                            <button onClick={() => handlePago(reserva)}>Pagar</button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="historial-pagos-section">
                <h3>Historial de Pagos</h3>
                <ul>
                    {historialPagos.map((pago, index) => (
                        <li key={index}>
                            {`Orden #${index + 1} - Producto: ${pago.nombre}, Precio: $${pago.precio}, Cantidad: ${pago.quantity}, Monto Total: $${pago.monto}, Fecha de Pago: ${new Date(pago.fecha_pago).toLocaleString()}`}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PanelUsuario;
