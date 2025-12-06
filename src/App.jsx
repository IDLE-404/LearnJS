import React from "react";
import Home from "./view/home/Home.page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./compontns/header/Header";

const App = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
