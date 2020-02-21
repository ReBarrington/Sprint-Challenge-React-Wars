import React from 'react';
import CharacterList from "./components/CharacterList";
import styled from "styled-components";
import './App.css';

const HeaderImg = styled.img `
  width: 70%;
  margin: 10%;
  border: 10px solid #FFE91B;
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
      <h1 className="Header">React Wars</h1>
      <CharacterList/>
    </div>
  );
}

export default App;