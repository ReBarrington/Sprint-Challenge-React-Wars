import React from 'react';
import CharacterList from "./components/CharacterList";
import styled from "styled-components";
import './App.css';
import SearchBar from './components/SearchBar';

const HeaderImg = styled.img `
  width: 70%;
  margin: 10%;
  border: 10px solid #FFE91B;
  `

  const ReactWars = styled.h1 `
    background: white;
    padding: 2%;
    `


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <HeaderImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1388px-Star_Wars_Logo.svg.png"></HeaderImg>
      <ReactWars className="Header">React Wars</ReactWars>
      <CharacterList/>
    </div>
  );
}

export default App;