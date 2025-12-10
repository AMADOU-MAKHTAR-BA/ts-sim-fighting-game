import { useState, useEffect } from "react";
import Carte from "../components/Carte";
const FetchPersos = () => {
  const url = "https://la-taverne.ducompagnon.fr/api/personnages";

  const [persos, setPersos] = useState<TypeTabsPerson[]>([]);
const [actualiserFetch , setActualiserFetch] = useState(true)
  useEffect(() => {
    fetchPersos();
  }, [actualiserFetch]);

  async function fetchPersos() {
    try {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setPersos(data);
        })
        .catch((err) => console.error(err));
    } catch (error) {
      console.error("erreur lors du fetch", error);
    }
  }
  useEffect(()=>{
    localStorage.setItem("myfetchCharacters" , JSON.stringify(persos))
  } , [persos]);
  const deletePerson = (id: number) => {
    setPersos(persos => persos.filter(perso => perso.id !== id));
  };
  return (
    <>
    <p>
      <button title="button" type="button" onClick={()=>{setActualiserFetch(!actualiserFetch)
        console.log(actualiserFetch)
      }}
       className="bg-blue-600 m-2 p-1 font-bold rounded-2xl w-full ">
        Actualiser la liste des personnages
      </button>
    </p>
    <div className="flex justify-center items-center flex-wrap gap-1.5 ">
      {persos.map((perso, index) => (
        <Carte key={index} person={perso} onClick={() => deletePerson(perso.id)}/>
      ))}
    </div>
    </>
  );
};

export default FetchPersos;
