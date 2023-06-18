import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const DetailsGift = () => {
  const { id } = useParams();
  return (
    <CardContainer>
      <ImageContainer>
        <img
          style={{ height: "100%", width: "100%", "object-fit": "contain" }}
          src={data.img}
        />
      </ImageContainer>
      <Column>
        <div>Nombre del </div>
        <div>descripción</div>
        <div>precio</div>
      </Column>
    </CardContainer>
  );
};

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const data = {
  id: 1,
  img: "https://static.abc.es/media/bienestar/2020/01/21/abrazar-abrazos-kS0F--1200x630@abc.jpg",
  title: "Un Abrazo",
  price: "$10.000",
  featured: true,
};

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
  margin: 10% auto;
  position: absolute;
  padding: 5%;
  box-shadow: 0 0 30px 10px #e6e6e6;
  background-color: rgba(249, 249, 249, 0);
`;
export default DetailsGift;
