import React, { useState } from "react";
import theme from "./components/Theme";
import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { styled as styledMui } from "@mui/system";
import { Routes } from "../Routes";

const Landing = () => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const handleInputChange = (e) => {
    setCode(e.target.value);
  };
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    fetch(Routes.code, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    }).then((res) => {
      if (res.status === 200) {
        setLoading(false);
        window.location.href = "/gifts";
      } else {
        setLoading(false);
        alert("Código no encontrado");
      }
    });
  };
  if (loading) return <div>Loading...</div>;
  return (
    <ThemeProvider theme={theme}>
      <CardContainer>
        <p>Ingresa el código de matrimonio</p>
        <TextField
          label="Código"
          color="neutral"
          focused
          onChange={handleInputChange}
        />
        <Link to="/gifts">
          <StyledButton
            variant="contained"
            color="complement"
            onClick={handleSubmit}
          >
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
  // width: 100vh;
  left: 0;
  right: 0;
  margin: 10% auto;
  position: absolute;
  padding: 5%;
  box-shadow: 0 0 30px 10px #e6e6e6;
  background-color: rgba(249, 249, 249, 0);
`;

export default Landing;
