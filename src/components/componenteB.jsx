import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class';

const ComponenteB = ({ contact }) => {
    const [connected, setConnected] = useState(contact.connected);

    const changeState = () => {
        setConnected(!connected);
        //contact.connected = connected;
    }

    return (
        <div>
            <h2>Name: { contact.name }</h2>
            <h2>Lastname: { contact.lastName }</h2>
            <h2>Email: { contact.email }</h2>
            <small>Contacto { connected ? 'En Línea' : 'No Disponible' }</small>
            <button onClick={changeState}>
                { connected ? 'Desconectar' : 'Conectar' }
            </button>
        </div>
    );
}

ComponenteB.propTypes = {
    contacto: PropTypes.instanceOf(Contact)
};

export default ComponenteB;
