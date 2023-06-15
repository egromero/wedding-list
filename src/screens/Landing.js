import React from "react";
import theme from "./components/Theme";
import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import styled from "styled-components";
import TextField from "@mui/material/TextField";

const Landing = () => {
  return (
    <ThemeProvider theme={theme}>
      <CardContainer>
        <p>Ingresa el código de matrimonio</p>
        <TextField label="Código" color="neutral" focused />
        <p>o</p>
        <Button variant="contained" color="neutral">
          Somos los novios
        </Button>
      </CardContainer>
    </ThemeProvider>
  );
};

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

export default Landing;
