import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { HomeStyled } from "./HomeStyle";
export default function Home({productList, orderFilter, setOrderFilter}){

    const handleOrderSearch = (e) => {
        setOrderFilter(e.target.value);
      };
    
    return(
        <>
        <HomeStyled>
        <div className="header">
        <h4>Quantidade de produtos:{productList.length}</h4>
        <select onChange={handleOrderSearch} value={orderFilter}>
        <option value="">Ordenar</option>
        <option value="c">A - Z</option>
        <option value="d">Z - A</option>
        <option value="e">Menor - Maior</option>
        <option value="f">Maior - Menor</option>
        </select>
        </div>
        <div className="cartao">
        {productList.sort((a, b) => {
            console.log(orderFilter);
            if (orderFilter === "c") {
              return a.name >= b.name ? 1 : -1;
            } else if (orderFilter === "d") {
              return a.name <= b.name ? 1 : -1;
            } else if (orderFilter === "e") {
              return a.value >= b.value ? 1: -1;
            } else if (orderFilter === "f") {
              return a.value <= b.value ? 1: -1;
            }
          })
          .map((productList) => {
            return (
              <ProductCard
                key={productList.id}
                productList={productList}
              />
            );
          })}
        </div>
        </HomeStyled>   
        </>
    )
}