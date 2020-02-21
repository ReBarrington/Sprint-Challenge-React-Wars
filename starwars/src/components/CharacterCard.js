import React from "react";
import Specs from "./Specs";
import styled from "styled-components";

const BorderAroundCard = styled.div `
  border: 10px solid black;
  margin: 10%;
  `

  const BorderAroundSpecies = styled.div `
    border: 5px solid black;
    margin: 10%;
    `


const CharacterCard = props => {

    console.log(props, " is props in CharacterCard")

  return (
    <BorderAroundCard className="character-list" key={props.name}>
      <h2>{props.name}</h2>
      <p>{props.gender}</p>
      <BorderAroundSpecies className="species">
        <p>Specs:</p>
        <Specs eyecolor={props.eyecolor} skincolor={props.skincolor}/>
      </BorderAroundSpecies>
    </BorderAroundCard>
  );
};
export default CharacterCard;
