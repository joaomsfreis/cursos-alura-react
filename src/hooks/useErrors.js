import { useState } from "react";

function useErrors(validations) {
  const initial = startState(validations);

  const [errors, setErros] = useState(initial);
  function validField(event) {
    const { name, value } = event.target;
    const isValid = validations[name](value);
    const newState = { ...errors, [name]: isValid };
    setErros(newState);
  }

  function canSubmit() {
    for(let field in errors) {
      if(!errors[field].valid) {
          return false;
      }
    }
    return true;
  }

  return [errors, validField, canSubmit];
}

function startState(validations) {
    const initial = {};
    for(let field in validations) {
        initial[field] = { valid: true, text: "" }
    }

    return initial;
}

export default useErrors;
