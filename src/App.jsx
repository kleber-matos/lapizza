import React from "react";
import Banner from "./components/Banner/index";
import Pizzas from "./components/Pizzas/index";
import Sobre from "./components/Sobre/index";
import "../src/App.scss";

export default function App() {
  return (
    <>
      <main>
        <Banner />
        <Pizzas />
        <Sobre />
      </main>
    </>
  );
}
