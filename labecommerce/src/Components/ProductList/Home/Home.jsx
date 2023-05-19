import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { HomeStyled } from "./HomeStyle";
export default function Home(props){

    const handleOrderSearch = (e) => {
        props.setOrderFilter(e.target.value);
      };
    
    return(
        <>
        <HomeStyled>
        <div className="header">
        <h4>Quantidade de produtos:{ProductCard.length}</h4>
        <select onChange={handleOrderSearch} value={props.orderFilter}>
        <option value="">Ordenar</option>
        <option value="c">A - Z</option>
        <option value="d">Z - A</option>
        <option value="e">Menor - Maior</option>
        <option value="f">Maior - Menor</option>
        </select>
        </div>
        <div className="cartao">
        {/* {products.sort((a, b) => {
            console.log(orderFilter);
            if (orderFilter === "c") {
              return a.name >= b.name ? 1 : -1;
            } else if (orderFilter === "d") {
              return a.name <= b.name ? 1 : -1;
            }
          })
          } */}
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        </div>
        </HomeStyled>   
        </>
    )
}