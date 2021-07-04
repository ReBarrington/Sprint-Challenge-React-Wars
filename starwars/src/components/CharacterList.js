import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard"
import styled from "styled-components";
import SearchBar from "./SearchBar";

const Boxes = styled.div `
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    `
const Search = styled.form `
display: flex;
justify-content: center;
border: 5px solid #FFE91B;
padding: 3%;
`


export default function CharacterList() {
  const [data, setData] = useState([]);

  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        console.log(response.data.results, " is response.data.results");
        const characters = response.data.results.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
        );
        setData(characters);
      });
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <Search className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
        </Search>
      <Boxes className="character">
        {data.map(character => {
          return (
            <div>
              <CharacterCard
                key={character.name}
                name={character.name}
                gender={character.gender}
                mass={character.mass}
                height={character.height}
                eyecolor={character.eye_color}
                skincolor={character.skin_color}
              />
            </div>
          );
        })}
      </Boxes>
    </div>
  );
}