import React, { useEffect, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AppBar from "@mui/material/AppBar";
import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "./components/Theme";
import { ThemeProvider } from "@mui/material/styles";
import { Routes } from "../Routes";

const Gifts = () => {
  const [data, setData] = useState([]);
  
  const fetchData = () => {
    fetch(Routes.gifts)
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
    return <div> Mira, esta página fue creada solo para este evento 
      y la tenemos en un servicio gratuito, así que si es la 
      primera vez que entras, se va a demorar un poquito en cargar,
      pero te puedes entretener leyendo este mensaje, favor paciencia jeje ...</div>;
  }
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="neutral">
        <Row>
          <FavoriteIcon sx={{ marginRight: "10px" }} />
          T&E - Regalos matrimonio
        </Row>
      </AppBar>
      <ImageList
        variant="quilted"
        sx={{ width: "90%", margin: "auto", padding: "5% 0", marginBottom: "5%" }}
        cols={3}
        rowHeight={400}
      >
        {data.map((item) => {
          const price = new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(item.price)
          return (
            <Link to={`/details/${item._id}`}>
            <ImageListItem key={item._id}>
              <img
                src={`${item.image}?w=248&fit=crop&auto=format`}
                srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.name}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.name}
                subtitle={price}
                sx = {{ 
                  "& .MuiImageListItemBar-title": {whiteSpace: "wrap", overflow: "show"}
                }}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.title}`}
                  >
                    <AddShoppingCartIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          </Link>
          )
        }
        )}
      </ImageList>
    </ThemeProvider>
  );
};
const Row = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1%;
  justify-content: center;
  align-items: center;
`;

export default Gifts;
