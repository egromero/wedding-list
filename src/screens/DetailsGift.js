import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "@mui/material/Button";
import theme from "./components/Theme";
import { ThemeProvider } from "@mui/material/styles";
import Checkout from "./Checkout";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AppBar from "@mui/material/AppBar";
import { Routes } from "../Routes";

const DetailsGift = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const fetchData = () => {
    fetch(Routes.details, {
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
    (showCheckout && <Checkout name={data.name} price={data.price} />) || (
      <ThemeProvider theme={theme}>
        <AppBar position="static" color="neutral">
          <Navbar>
            <FavoriteIcon sx={{ marginRight: "10px" }} />
            T&E - Regalos matrimonio
          </Navbar>
        </AppBar>
        <CardContainer>
          <ImageContainer>
            <img
              style={{
                height: "100%",
                width: "100%",
                objectFit: "contain",
                boxShadow: "0 0 3px gray",
                borderRadius: "3px",
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
                onClick={() => setShowCheckout(true)}
              >
                Regalar
              </Button>
            </Row>
          </Column>
        </CardContainer>
      </ThemeProvider>
    )
  );
};

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1%;
  justify-content: center;
  align-items: center;
`;

const TextName = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

const TextDescription = styled.p`
  font-size: 1rem;
  margin: 20px 0;
  width: 250px;
`;

const TextPrice = styled.p`
  font-size: 1rem;
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
  left: 0;
  right: 0;
  margin: 5% auto;
  position: absolute;
  padding: 5%;
  box-shadow: 0 0 30px 10px #e6e6e6;
  background-color: rgba(249, 249, 249, 0);
`;
export default DetailsGift;
