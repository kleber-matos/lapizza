import React from "react";
import style from "./card.module.scss";

export default function index({ image, title, price }) {
  return (
    <div className={style.card}>
      <img src={image} alt="Pizza sabor cuma" />

      <div className={style.description}>
        <h2>{title}</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <h2 className={style.price}>R$ {price}</h2>
        <button>COMPRAR AGORA</button>
      </div>
    </div>
  );
}
