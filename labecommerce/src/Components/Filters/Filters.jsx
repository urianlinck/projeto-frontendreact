import React from "react";
import { StyledFilters } from "./FiltersStyle";

export default function Filter(){
    return(
        <>
        <StyledFilters>
        <h2>Filters</h2>
        <label id="minimo">Valor Mínimo:</label>
        <input type="text" id="minimo" name="minimo"></input>
        <label id="maximo">Valor Máximo:</label>
        <input type="text" id="maximo" name="maximo"></input>
        <label id="busca">Buca por nome:</label>
        <input type="text" id="busca" name="busca"></input>
        </StyledFilters>
        </>
    )
}