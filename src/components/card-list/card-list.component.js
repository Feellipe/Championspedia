import React from "react";
import "./card-list.styles.css";
import { Card } from "../cards/card.componets";

export const CardList = props => {
  return (
    <div className="card-list">
      {props.champions.map(champion => (
        <Card key={champion.id} champion={champion}>
          {champion.name}
        </Card>
      ))}
    </div>
  );
};
