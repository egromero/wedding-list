import React from "react";
import theme from "./components/Theme";
import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { styled as styledMui } from "@mui/system";

const Landing = () => {
  return (
    <ThemeProvider theme={theme}>
      <CardContainer>
        <p>Ingresa el código de matrimonio</p>
        <TextField label="Código" color="neutral" focused />
        <Link to="/gifts">
          <StyledButton variant="contained" color="complement">
            Validar
          </StyledButton>
        </Link>
      </CardContainer>
    </ThemeProvider>
  );
};

const StyledButton = styledMui(Button)`
  margin: 10px;
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

export default Landing;
