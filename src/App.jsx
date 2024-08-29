import React from "react";
import Banner from "./components/Banner/index";
import Pizzas from "./components/Pizzas/index";
import "../src/App.scss";

export default function App() {
  return (
    <>
      <main>
        <Banner />
        <Pizzas />
      </main>
    </>
  );
}
