import Carte from "./Carte";

import { useState } from "react";

const MapCarte = ({ myLocalCharacters }: { myLocalCharacters: TypeTabsPerson[] }) => {
  
  const [characters, setCharacters] = useState(myLocalCharacters);

  const deletePerson = (id: number) => {
    setCharacters(characters => characters.filter(character => character.id !== id));
  };

  return (
    <div className="flex justify-center items-center flex-wrap gap-1.5">
      {characters.map((person, index) => (
        <Carte
          key={index}
          person={person}
          onClick={() => deletePerson(person.id)}
        />
      ))}
    </div>
  );
};

export default MapCarte;

