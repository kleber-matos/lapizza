import React from "react";
import Card from "../Card/index";
import style from "./pizzas.module.scss";
import cuma from "../../assets/cuma.png";
import vege from "../../assets/vege.png";
import toca from "../../assets/toca.png";
import menta from "../../assets/menta.png";

export default function index() {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <Card image={cuma} title={"La Cuma"} price={"29,90"} />
        <Card image={menta} title={"La Menta"} price={"26,90"} />
        <Card image={vege} title={"La Menta"} price={"26,90"} />
        <Card image={toca} title={"La Toca"} price={"23,80"} />
      </div>
    </section>
  );
}
