import { useEffect, useState } from "react";
import Input from "../components/Input";
import Select from "../components/Select";

const CreationPerso = () => {
  //my localStorage

  const [myCreateCharacters, setMyCreateCharacters] = useState<
    interfaceDataForm[]
  >(() => {
    const saved = localStorage.getItem("myCreateCharacters");
    return saved ? JSON.parse(saved) : [];
  });

  const [dataForm, setDataForm] = useState<interfaceDataForm>({
    name: "",
    health: null,
    power: null,
    magic: null,
    image: "",
    elementInput: "",
    classeInput: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setDataForm((prev) => ({
      ...prev,
      [name]: e.target.type === "number" ? Number(value) : value,
    }));
  };

  const tabInputs = [
    {
      type: "text",
      name: "name",
      value: dataForm.name,
      placeholder: "saisir le nom de l'avatar",
      required: true,
      label: "NOM :",
    },
    {
      type: "number",
      name: "health",
      value: dataForm.health ?? "",
      required: true,
      placeholder: "saisir ses PS",
      label: "Points de Santé :",
    },
    {
      type: "number",
      name: "power",
      label: "Points de Puissance :",
      value: dataForm.power ?? "",
      required: true,
      placeholder: "saisir ses PP",
    },
    {
      type: "number",
      name: "magic",
      value: dataForm.magic ?? "",
      required: true,
      placeholder: "saisir ses PM",
      label: "Points de Magie :",
    },
  ];

  const tabSelects = [
    {
      label: "Souce de l'image :",
      name: "image",
      value: dataForm.image,
      options: [
        { value: "Aizen.jpg", label: "SOSUKE AIZEN" },
        { value: "Aizen&Kisuke.jpg", label: "URAHARA & AIZEN" },
        { value: "AizenShadow.jpg", label: "DARK AIZEN" },
        { value: "bigThree.jpg", label: "BIG THREE" },
        { value: "BigThreeNindo.jpg", label: "BIG THREE NINDO" },
        {
          value: "bleachBadassCharacters.jpg",
          label: "BLEACH BADASS CHARACTERS",
        },
        { value: "Cell.jpg", label: "CELL" },
        { value: "chevalier_feu.jpg", label: "CHEVALIER DE FEU 🔥" },
        { value: "chevalier.jpg", label: "CHEVALIER" },
        { value: "dragon_epse.jpg", label: "DRAGON ÉPÉISTE ⚔️" },
        { value: "dragon.jpg", label: "DRAGON" },
        { value: "elfe.jpg", label: "ELFE" },
        { value: "ElricsBrothers.jpg", label: "LES FRERES ELRICS" },
        { value: "EmperorAizen.jpg", label: "EMPEROR AIZEN" },
        { value: "GoItchi.jpg", label: "ITCHIGO" },
        { value: "goku.jpg", label: "GOKU" },
        { value: "GokuDaima.jpg", label: "GOKU DAIMA" },
        { value: "gokuSSJ3.jpg", label: "GOTU SS3" },
        { value: "GokuVegeta.jpg", label: "GOKU & VEGETA" },
        { value: "GrimjowJagerjack.jpg", label: "GRIMLOW JAGERJACK" },
        { value: "heros.jpg", label: "HERO" },
        { value: "Hitsugaya.jpg", label: "HITSUGAYA TOSHIRO" },
        { value: "HitsugayaToshiro.jpg", label: "HITSUGAYA TOSHIRO" },
        { value: "IchimaruGiN.jpg", label: "GIN ICHIMARU" },
        { value: "IkkakukMadarame.jpg", label: "IKKAKU MADARAME" },
        { value: "Itchigo.jpg", label: "ICHIGO" },
        { value: "ItchigoHollow.jpg", label: "ICHIGO HOLLOW" },
        { value: "Kira.jpg", label: "KRA" },
        { value: "kirua.jpg", label: "KIRA" },
        { value: "KiruaFunny.jpg", label: "KIRA PRUMY" },
        { value: "Luffy.jpg", label: "LUFFY" },
        { value: "madrilen.jpg", label: "MARINE" },
        { value: "magicien_glace.jpg", label: "MAGICIEN DE GLACE" },
        { value: "magicienne.jpg", label: "MAGICIENNE" },
        { value: "Naruto.jpg", label: "NARUTO UZUMAKI" },
        { value: "nobody.png", label: "PAS D'IMAGE" },
        { value: "orc.jpg", label: "ORC" },
        { value: "princeUlqui.jpg", label: "PRNCE ULQUIYORA" },
        { value: "programense.jpg", label: "PROGRAMENSE" },
        { value: "secondoUlquiora.jpg", label: "SECONDO ULQUIYORA" },
        { value: "sorcier.jpg", label: "SORCIER" },
        { value: "sorciere_feu.jpg", label: "SORCIÈRE DE FEU" },
        { value: "TokyoReverger.jpg", label: "TOKYO REVENGER" },
        { value: "Trunks.jpg", label: "TRUNKS" },
        { value: "Ulqui.jpg", label: "ULQUIYORA" },
        { value: "ulquioraShiffer.jpg", label: "ULQUIORA SHIFFER" },
        { value: "vite.svg", label: "LOGO VITE" },
        { value: "renameAfter.jpg", label: "RUKIA CAPITAIN" },
        { value: "Zenitsu.jpg", label: "ZENITSU" },
        { value: "Zero.jpg", label: "ZERO" },
      ],
    },
    {
      label: "Élément :",
      name: "elementInput",
      value: dataForm.elementInput,
      options: [
        { value: "feu ", label: "Feu 🔥" },
        { value: "eau", label: "Eau 💧" },
        { value: "vent", label: "Vent 🌪" },
        { value: "terre", label: "Terre 🌍" },
      ],
    },
    {
      label: "Classe :",
      name: "classeInput",
      value: dataForm.classeInput,
      options: [
        { value: "guerrier", label: "Guerrier ⚔" },
        { value: "mage", label: "Mage 🧙" },
        { value: "archer", label: "Archer 🏹" },
      ],
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newCharacter = {id:Date.now() , ...dataForm };
    const addNewCharacter = [newCharacter];
    setMyCreateCharacters((prev) => [...addNewCharacter, ...prev]);

    setDataForm({
      name: "",
      health: null,
      power: null,
      magic: null,
      image: "",
      elementInput: "",
      classeInput: "",
    });
  };

  useEffect(() => {
    localStorage.setItem(
      "myCreateCharacters",
      JSON.stringify(myCreateCharacters)
    );
    console.table(myCreateCharacters);
  }, [myCreateCharacters]);

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-2xl space-y-6"
    >
      {tabInputs.map((input, index) => (
        <div key={index} className="space-y-2">
          <Input
            type={input.type}
            name={input.name}
            value={input.value}
            placeholder={input.placeholder}
            required={input.required}
            onChange={handleChange}
            label={input.label}
          />
        </div>
      ))}
      {tabSelects.map((select, index) => (
        <Select
          key={index}
          label={select.label}
          name={select.name}
          value={select.value}
          onChange={handleChange}
          options={select.options}
        />
      ))}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl
         shadow hover:bg-blue-700 transition"
      >
        Créer
      </button>
    </form>
  );
};

export default CreationPerso;
