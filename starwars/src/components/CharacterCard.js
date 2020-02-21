import React from "react";
import Specs from "./Specs";
import styled from "styled-components";

const BorderAroundCard = styled.div `
  border: 10px solid #FFE91B;
  color: #FFE91B;
  margin: 2%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 400px;
  `

const BorderAroundSpecies = styled.div `
    border: 5px solid #FFE91B;
    padding: 5%;
    margin: 2%;
    background-color: #443E3E;
    `
const Name = styled.h1 `
    font-size: 200%;
    padding: 5%;
    `

const LeftSide = styled.div `
    justify-content: center;
    align-items: center;
    padding-left: 8%;

`

const CharacterCard = props => {

    console.log(props, " is props in CharacterCard")

  return (
    <BorderAroundCard className="character-list" key={props.name}>
        <LeftSide className="leftside">
            <Name>{props.name}</Name>
            <p>{props.gender}</p>
        </LeftSide>
      <BorderAroundSpecies className="species">
        <p>Physical Appearance:</p>
        <Specs eyecolor={props.eyecolor} skincolor={props.skincolor} height={props.height} mass={props.mass}/>
      </BorderAroundSpecies>
    </BorderAroundCard>
  );
};
export default CharacterCard;
