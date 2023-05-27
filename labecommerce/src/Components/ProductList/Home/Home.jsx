import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { HomeStyled } from "./HomeStyle";
export default function Home({addToCart,productList, orderFilter, setOrderFilter, cart, setCart, amount, setAmount, minFilter, maxFilter, searchFilter}){

    const handleOrderSearch = (e) => {
        setOrderFilter(e.target.value);
      };
    const result = 
      productList
      .filter((valorMinimo) => {
        return minFilter ? valorMinimo.value >= minFilter : productList
      })
      .filter((valorMaximo) => {
        return maxFilter ? valorMaximo.value <= maxFilter : productList
      })
      .filter((busca) => {
        return busca.name.toLowerCase().includes(searchFilter.toLowerCase());
      })
      .sort((a, b) => {
          if (orderFilter === "c") {
            return a.name >= b.name ? 1 : -1;
          } else if (orderFilter === "d") {
            return a.name <= b.name ? 1 : -1;
          } else if (orderFilter === "e") {
            return a.value >= b.value ? 1: -1;
          } else if (orderFilter === "f") {
            return a.value <= b.value ? 1: -1;
          } return productList;
        })
        .map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          );
        })

      return(
        <>
        <HomeStyled> 
        <div className="header">
        <h1>Tesouros do Espaço</h1> 
        <h4>Quantidade de produtos: {result.length}</h4>
        <select onChange={handleOrderSearch} value={orderFilter}>
        <option value="">Ordenar</option>
        <option value="c">A - Z</option>
        <option value="d">Z - A</option>
        <option value="e">Menor - Maior</option>
        <option value="f">Maior - Menor</option>
        </select>
        </div>
        <div className="cartao">
        {result}
        </div>
        </HomeStyled>   
        </>
    )
  }