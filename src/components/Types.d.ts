declare global {
  interface interfaceDataForm {
    name: string;
    health: number | null;
    power: number | null;
    magic: number | null;
    image: string;
    elementInput: string;
    classeInput: string;
  }
  interface TypeTabsPerson {
    image: string;
    id: number;
    name: string;
    health: number;
    power: number;
    magic: number;
  }
}
export {};
