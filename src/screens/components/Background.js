import React from "react";
import styled from "styled-components";
import backgroundImage from "./assets/bg.jpg";

const Background = ({ children }) => (<Container className="background"> {children} </Container>);

const Container = styled.div`
    background-image: url(${backgroundImage});
    background-size: cover; 
    background-repeat: no-repeat;
    background-position: center center;
    min-height: 100%;
    position: fixed;
    width: 100%;
`;


export default Background;