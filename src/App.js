import { Container, Typography } from "@mui/material";
import "./App.css";
import StoreForm from "./components/StoreForm/StoreForm";
import "@fontsource/roboto";
import { validCPF, validPassword } from "./models/store";
import Validations from "./contexts/Validations";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de Cadastro
      </Typography>
      <Validations.Provider value={{ cpf: validCPF, password: validPassword }}>
        <StoreForm onSubmit={onSubmitForm} />
      </Validations.Provider>
    </Container>
  );
}

function onSubmitForm(data) {
  console.log(data);
}

export default App;
