import StatsPerso from "./StatsPerso";
type TypePerson = {
  person: CaracteristiqueTypePerson;
  onClick: () => void;
};

export default function Carte({ person, onClick }: TypePerson) {

  const tableauStats = [
    { stat: "sante", value: person.health },
    { stat: "attaque", value: person.power },
    { stat: "magie", value: person.magic }
  ];

  return (
    <div className="text-2xl text-black bg-blue-200 flex flex-col gap-1 h-[400px] w-[250px] shadow shadow-black m-0.5 p-0">
      
      <div className="w-full h-[200px] bg-amber-100 overflow-hidden p-0">
        <img
          src={`../public/assets/img/${person.image}`}
          className="w-full h-full object-cover hover:scale-105"
          alt={person.image}
        />
      </div>

      <h1 className="font-bold text-center">{person.name}</h1>

      <div className="grid p-1">
        {tableauStats.map((stats, index) => (
          <StatsPerso key={index} stat={stats.stat} value={stats.value} />
        ))}
      </div>

      <div className="flex justify-center items-center ">
        <button className="w-full mx-2 my-2 p-1 bg-red-500 rounded-2xl shadow shadow-black text-white font-bold hover:scale-103 hover:bg-red-600" type="button" onClick={onClick}>Supprimer</button>
      </div>
    </div>
  );
}
