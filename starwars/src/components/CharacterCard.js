import React from "react";
import Species from "./SpeciesCard";
import styled from "styled-components";

const BorderAroundCard = styled.div `
  border: 10px solid black;
  margin: 10%;
  `

const CharacterCard = props => {
  return (
    <BorderAroundCard className="character-list" key={props.name}>
      <h2>{props.name}</h2>
      <p>{props.gender}</p>
      <p>EARTH</p>
      <div className="species">
          <Species/>
      </div>
    </BorderAroundCard>
  );
};
export default CharacterCard;
