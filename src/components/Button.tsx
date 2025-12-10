import type { ReactNode } from "react";

 export default function Button({ children ,className, onClick }:{
  children:ReactNode ; className?:string ; onClick?:(e?:number)=>void }) {

  return (
    <button type="button"
      className={className} onClick={()=>onClick}
      >
      {children}
    </button>
  );
}