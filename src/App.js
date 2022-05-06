import { Container, Typography } from '@mui/material';
import './App.css';
import StoreForm from './components/StoreForm/StoreForm';
import '@fontsource/roboto'

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
      <StoreForm onSubmit={onSubmitForm} validCPF={validCPF}/>
    </Container>
  );
}

function onSubmitForm(data) {
  console.log(data);
}

function validCPF(cpf) {
  if(cpf.length !== 11) {
    return {cpf: {valid: false, text: "CPF deve ter 11 dígitos"}};
  } else {
    return {cpf: {valid: true, text: ""}};
  }
}

export default App;
