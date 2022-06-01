import { Step, StepLabel, Stepper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DeliveryData from "./DeliveryData";
import PersonalData from "./PersonalData";
import UserData from "./UserData";

function StoreForm({ onSubmit }) {
  const [currentStage, setCurrentStage] = useState(0);
  const [data, setData] = useState({});

  useEffect(() => {
    if (currentStage === forms.length - 1) {
      onSubmit(data);
    }
  });

  const forms = [
    <UserData onSubmit={getData} />,
    <PersonalData onSubmit={getData} />,
    <DeliveryData onSubmit={getData} />,
    <Typography variant="h5">Obrigado pelo Cadastro!</Typography>,
  ];

  function getData(coletedData) {
    setData({ ...coletedData, ...data });
    nextStage();
  }

  function nextStage() {
    setCurrentStage(currentStage + 1);
  }

  return (
    <>
      <Stepper activeStep={currentStage}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Endereço</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {forms[currentStage]}
    </>
  );
}

export default StoreForm;
