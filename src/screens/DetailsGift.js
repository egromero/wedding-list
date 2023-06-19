import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "@mui/material/Button";
import theme from "./components/Theme";
import { ThemeProvider } from "@mui/material/styles";

const DetailsGift = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch(`http://localhost:3000/gifts/details`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ id: id }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <ThemeProvider theme={theme}>
      <CardContainer>
        <ImageContainer>
          <img
            style={{
              height: "100%",
              width: "100%",
              "object-fit": "contain",
              "box-shadow": "0 0 3px gray",
              "border-radius": "3px",
            }}
            src={data.image}
          />
        </ImageContainer>
        <Column>
          <TextName>{data.name} </TextName>
          <TextDescription>{data.description}</TextDescription>
          <TextPrice>${data.price}</TextPrice>
          <Row>
            <Button
              variant="contained"
              color="neutral"
              sx={{ "margin-right": "5px" }}
            >
              Mercado Pago
            </Button>
            <Button variant="contained" color="complement">
              Transferencia
            </Button>
          </Row>
        </Column>
      </CardContainer>
    </ThemeProvider>
  );
};

const TextName = styled.h1`
  margin: 0;
`;

const TextDescription = styled.p`
  font-family: fantasy;
  font-size: 20px;
  margin: 15px 0;
`;

const TextPrice = styled.p`
  font-size: 30px;
  margin: 15px 0;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: auto;
`;

const ImageContainer = styled.div`
  width: 40%;
  height: 100%;
  margin-right: 5%;
`;

const CardContainer = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  width: 150vh;
  left: 0;
  right: 0;
  margin: 5% auto;
  position: absolute;
  padding: 5%;
  box-shadow: 0 0 30px 10px #e6e6e6;
  background-color: rgba(249, 249, 249, 0);
`;
export default DetailsGift;
