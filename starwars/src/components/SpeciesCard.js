import React from "react";

const SpeciesCard = props => {
  return (
    <div className="film-list" key={props.id}>
      <h4>Species: {props.title}</h4>
      <p> species name</p>
      <p>classification:</p>
      <p>Average Lifespan: </p>
    </div>
  );
};
export default SpeciesCard;
