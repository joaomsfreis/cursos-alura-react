import React from 'react';

const Validations = React.createContext({ cpf: noValidation, password: noValidation });

function noValidation(data) {
    return { valid: true, text: "" }
}

export default Validations;
