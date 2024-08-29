import React from "react";
import cuma from "../../assets/cuma.png";
import style from "./pizzas.module.scss";

export default function index() {
  return (
    <section className={style.section}>
      <div className={style.card}>
        <img src={cuma} alt="Pizza sabor cuma" />

        <div className={style.description}>
          <h2>La Cuma</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <h2>R$ 29,90</h2>
          <button>COMPRAR AGORA</button>
        </div>
      </div>
    </section>
  );
}
