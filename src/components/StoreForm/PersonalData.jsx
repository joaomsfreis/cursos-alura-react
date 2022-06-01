import React, { useContext, useState } from "react";
import { Button, FormControlLabel, Switch, TextField } from "@mui/material";
import Validations from "../../contexts/Validations";
import useErrors from "../../hooks/useErrors";

function PersonalData({ onSubmit }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cpf, setCPF] = useState("");
  const [promotions, setPromotions] = useState(true);
  const [news, setNews] = useState(true);
  const validations = useContext(Validations);
  
  const [errors, validField, canSubmit] = useErrors(validations);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if(canSubmit()) {
          onSubmit({ name, lastName, cpf, promotions, news });
        }
      }}
    >
      <TextField
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
        id="name"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={lastName}
        onChange={(event) => {
          setLastName(event.target.value);
        }}
        id="last-name"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={cpf}
        onChange={(event) => {
          setCPF(event.target.value);
        }}
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
        error={!errors.cpf.valid}
        helperText={errors.cpf.text}
        onBlur={validField}
        name="cpf"
      />

      <FormControlLabel
        control={
          <Switch
            name="promotions"
            checked={promotions}
            onChange={(event) => {
              setPromotions(event.target.checked);
            }}
            color="primary"
          />
        }
        label="Promoções"
      />

      <FormControlLabel
        control={
          <Switch
            name="news"
            checked={news}
            onChange={(event) => {
              setNews(event.target.checked);
            }}
            color="primary"
          />
        }
        label="Novidades"
      />

      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default PersonalData;
