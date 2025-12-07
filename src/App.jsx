import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./compontns/header/Header";
import Footer from './compontns/footer/Footer';
import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
