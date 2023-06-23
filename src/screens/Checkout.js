import React from "react";
import { redirect } from "react-router-dom";
import styled from "styled-components";
import { Button } from "@mui/material";
import theme from "./components/Theme";
import { ThemeProvider } from "@mui/material/styles";
import { Routes } from "../Routes";

const Checkout = ({ name, price }) => {
  return (
    <ThemeProvider theme={theme}>
      <CardContainer>
        <AcountText style={{ marginBottom: "40px" }}>
          Transfiera a cualquiera de siguientes cuentas:
        </AcountText>
        <Row>
          <Column>
            <AcountText> Nombre: Erick Romero Santibáñez</AcountText>
            <AcountText> Rut: 19065385-4</AcountText>
            <AcountText> Banco: Banco Chile</AcountText>
            <AcountText> Tipo de cuenta: Cuenta Corriente</AcountText>
            <AcountText> Cuenta: 4420201102</AcountText>
            <AcountText> tamarayerick090923@gmail.com</AcountText>
          </Column>
          <Column>
            <AcountText> Nombre: Erick Romero Santibáñez</AcountText>
            <AcountText> Rut: 19065385-4</AcountText>
            <AcountText> Banco: Banco Chile</AcountText>
            <AcountText> Tipo de cuenta: Cuenta Corriente</AcountText>
            <AcountText> Cuenta: 4420201102</AcountText>
            <AcountText> tamarayerick090923@gmail.com</AcountText>
          </Column>
        </Row>
        <Button
          variant="contained"
          color="complement"
          onClick={() => sendMessage(name, price)}
        >
          Ya transferí!
        </Button>
      </CardContainer>
    </ThemeProvider>
  );
};

const sendMessage = (name, price) => {
  fetch(Routes.checkout, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ name: name, price: price }),
  }).then(()=>{
    window.location.href = "/gifts";
  });
  
};

const AcountText = styled.p`
  font-family: monospace;
  font-size: 1.2rem;
  margin: 3px 15px 0 0;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

const CardContainer = styled.div`
  align-items: center;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 100vh;
  left: 0;
  right: 0;
  margin: 10% auto;
  position: absolute;
  padding: 5%;
  box-shadow: 0 0 30px 10px #e6e6e6;
  background-color: rgba(249, 249, 249, 0);
`;
export default Checkout;
