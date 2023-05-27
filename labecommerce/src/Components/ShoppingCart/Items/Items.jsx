import React from "react";
import blackhole from "../../../assets/blackhole.png"
import { StyledItems } from "./ItemsStyle";

export default function Items({name, value, quantity, removeItem, id}){
    return(
        <>
        <StyledItems>
        <p>{quantity}x {name}</p>
        <div>
        <p>{value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        <button onClick={()=>removeItem(id)}> <img src={blackhole} title="Remover"/> </button>
        </div>
        </StyledItems>
        </> 
    )
}