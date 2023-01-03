import React, { useState, createContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Home, About, Product } from "../pages";
import { Header } from "../components";

export const ThemeContext = createContext({});

const RoutesLink = () => {
  const [context, setContext] = useState(false);
  return (
    <>
      <ThemeContext.Provider value={{ context, setContext }}>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </>
  );
};

export default RoutesLink;
