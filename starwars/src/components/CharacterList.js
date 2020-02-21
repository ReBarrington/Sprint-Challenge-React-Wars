import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard"


export default function CharacterList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        console.log(response.data.results, " is response.data.results");
        setData(response.data.results);
      })
      .catch(error => {
        console.log("the data was not return", error);
      });
  }, []);

  return (
    <div className="character">
      {data.map(character => {
        return (
          <CharacterCard
            key={character.name}
            name={character.name}
            gender={character.gender}
            species={character.species[0]}
            homeworld={character.homeworld}
            eyecolor={character.eye_color}
            skincolor={character.skin_color}
          />
        );
      })}
    </div>
  );
}