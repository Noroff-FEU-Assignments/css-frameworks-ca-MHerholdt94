import React from "react";
import { Outlet } from "react-router-dom";
import "./sass/style.scss";
import Heading from "./components/Heading";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="wrapper">
        <Heading />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
