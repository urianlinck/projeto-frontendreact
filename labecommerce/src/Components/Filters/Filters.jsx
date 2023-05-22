import React from "react";
import { StyledFilters } from "./FiltersStyle";
import productList from "../../assents/productList";
import ProductCard from "../ProductList/ProductCard/ProductCard";

export default function Filter({minFilter, setMinFilter, maxFilter, setMaxFilter, searchFilter, setSearchFilter}){
    const handleMinFilter = (e) => {
        setMinFilter(e.target.value);
      };
      const handleMaxFilter = (e) => {
        setMaxFilter(e.target.value);
      };
      const handleSearchFilter = (e) => {
        setSearchFilter(e.target.value);
      };
    return(
        <>
        <StyledFilters>
        <h2>Filters</h2>
        <label id="minimo">Valor Mínimo:</label>
        <input type="number" id="minimo" name="minimo" onChange={handleMinFilter}value={minFilter}></input>
        <label id="maximo">Valor Máximo:</label>
        <input type="number" id="maximo" name="maximo" onChange={handleMaxFilter} value={maxFilter}></input>
        <label id="busca">Buca por nome:</label>
        <input type="text" id="busca" name="busca" onChange={handleSearchFilter} value={searchFilter}></input>
        </StyledFilters>
        </>
    )
}