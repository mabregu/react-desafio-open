import React from 'react';
import { Contact } from '../models/contact.class';
import ComponenteB from './componenteB';

const ComponenteA = ({ contact }) => {
    const defaultContact = new Contact ({
        name: 'Test',
        lastName: 'Tester',
        email: 'test@example.com',
        connected: false
    });

    return (
        <div>
            <h1>Your contact</h1>
            <ComponenteB contact={ defaultContact } />
        </div>
    );
}

export default ComponenteA;
