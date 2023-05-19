import React from "react";
import { StyledProduct } from "./ProductCardStyle";
import productList from "../../../assents/productList";

export default function ProductCard({productList}){
    return(
        <>
        <StyledProduct>
        <img src="https://picsum.photos/300/335?a="/>
        <div>
        <p>{productList.name}</p>
        <p>{productList.value}</p>
        
        <button>Adicionar ao Carrinho</button>
        </div>
        </StyledProduct>
        </>
    )
}