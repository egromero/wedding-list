import React, { useEffect, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DetailsGift from "./DetailsGift";
import { Link } from "react-router-dom";

const Gifts = () => {
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch("http://localhost:3000/gifts")
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
    <ImageList
      variant="masonry"
      sx={{ width: "90%", margin: "auto", padding: "5% 0" }}
      cols={4}
    >
      {data.map((item) => (
        <ImageListItem key={item._id}>
          <img
            src={`${item.image}?w=248&fit=crop&auto=format`}
            srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.name}
            subtitle={item.price}
            actionIcon={
              <Link to={`/details/${item._id}`}>
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                >
                  <AddShoppingCartIcon />
                </IconButton>
              </Link>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default Gifts;
