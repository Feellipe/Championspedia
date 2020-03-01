import React from "react";
import "./card.styles.css";

export const Card = props => {
  return (
    <div className="card-container">
      <img
        className="card-container__img"
        alt={props.champion.name}
        src={
          "http://ddragon.leagueoflegends.com/cdn/10.4.1/img/champion/Aatrox.png"
        }
      />
      <h1 className="card-cointainer__title"> {props.champion.name} </h1>
      <h2 className="card-cointainer__sub-title"> {props.champion.title}</h2>
    </div>
  );
};
