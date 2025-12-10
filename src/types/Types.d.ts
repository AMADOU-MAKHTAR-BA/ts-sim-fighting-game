declare global {
    interface CaracteristiqueTypePerson {
      id:number;
      image : string ;
      name : string ;
      health: number ;
      power: number ;
      magic: number ;
    };
    interface TypeSelectOption{
        value: string;
    label: string;
    }
    interface TypeSelectProps{
    label: string;
    name: string;
    value: string;
    onChange: (e)=>viod;
    options: TypeSelectOption[];
    }
}
export{};