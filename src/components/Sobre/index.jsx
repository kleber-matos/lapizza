import React from "react";
import style from "./sobre.module.scss";
import mesas from "../../assets/mesas.png";

export default function index() {
  return (
    <section className={style.section}>
      <img src={mesas} alt="Mesas do restaurante" />

      <div className={style.sobre}>
        <h2>Sobre a La Pizza</h2>
        <p>
          Bem-vindo ao "La Pizza", o seu refúgio acolhedor para uma experiência
          de pizzaria autêntica. Em nosso pequeno oásis italiano, cada pedaço de
          pizza é uma obra-prima artesanal. Sinta-se em casa enquanto o aroma
          sedutor de massa fresca assa no forno, criando as pizzas mais
          deliciosas da cidade.
        </p>
        <button>Ler mais sobre</button>
      </div>
    </section>
  );
}
