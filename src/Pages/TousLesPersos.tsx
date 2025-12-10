import MapCarte from "../components/MapCarte";
const TousLesPersos = () => {
  const mySavedCreatecharacters = localStorage.getItem("myCreateCharacters");
const mySavedfetchCharacters = localStorage.getItem("myfetchCharacters");
const mySavedLocalCharacters = localStorage.getItem("myTabCharacters");
const myCreatecharacters = mySavedCreatecharacters ? JSON.parse(mySavedCreatecharacters) : [];
const myFetchCharacters = mySavedfetchCharacters ? JSON.parse(mySavedfetchCharacters) : [];
const myLocalCharacters = mySavedLocalCharacters ? JSON.parse(mySavedLocalCharacters) : [];
const myAllCharacters =[...myCreatecharacters , ...myLocalCharacters , ...myFetchCharacters];

  return (
   <>
   <MapCarte myLocalCharacters={myAllCharacters}/>
   </>
  );
};


export default TousLesPersos;