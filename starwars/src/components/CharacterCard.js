import React from "react";
import Specs from "./Specs";
import styled from "styled-components";

const BorderAroundCard = styled.div `
  border: 10px solid black;
  margin: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  `

const BorderAroundSpecies = styled.div `
    border: 5px solid black;
    padding: 5%;
    margin: 10%;
    background-color: white;
    `
const Name = styled.h1 `
    font-size: 200%;
    `

const CharacterCard = props => {

    console.log(props, " is props in CharacterCard")

  return (
    <BorderAroundCard className="character-list" key={props.name}>
        <div className="leftside">
            <Name>{props.name}</Name>
            <p>{props.gender}</p>
        </div>
      <BorderAroundSpecies className="species">
        <p>Physical Appearance:</p>
        <Specs eyecolor={props.eyecolor} skincolor={props.skincolor} height={props.height} mass={props.mass}/>
      </BorderAroundSpecies>
    </BorderAroundCard>
  );
};
export default CharacterCard;
