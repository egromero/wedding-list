import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Landing from "./screens/Landing";
import Login from "./screens/Login";
import Gifts from "./screens/Gifts";
import DetailsGift from "./screens/DetailsGift";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/gifts" element={<Gifts />} />
        <Route path="/details/:id" element={<DetailsGift />} />
      </Routes>
    </BrowserRouter>
  );
}