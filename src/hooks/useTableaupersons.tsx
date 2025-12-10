import { useState } from "react";
function useTableaupersons() {
  const [characters, setCharacters] = useState<TypeTabsPerson[]>([]);

  const deletePerson = (id: number) => {
    setCharacters((characters) =>
      characters.filter((character) => character.id !== id)
    );
  };

  return {
    characters,
    deletePerson,
  };
}

export default useTableaupersons;
