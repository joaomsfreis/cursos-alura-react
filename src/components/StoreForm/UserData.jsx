import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import Validations from "../../contexts/Validations";
import useErrors from "../../hooks/useErrors";

function UserData({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validations = useContext(Validations);
  const [errors, validField, canSubmit] = useErrors(validations);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (canSubmit()) {
          onSubmit({ password, email });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
        label="E-mail"
        type="email"
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />
      <TextField
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        id="password"
        label="Senha"
        type="password"
        name="password"
        variant="outlined"
        margin="normal"
        onBlur={validField}
        error={!errors.password.valid}
        helperText={errors.password.text}
        required
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default UserData;
