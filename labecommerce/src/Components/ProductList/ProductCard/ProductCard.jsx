import React from "react";
import { StyledProduct } from "./ProductCardStyle";

export default function ProductCard(){
    return(
        <>
        <StyledProduct>
        <img></img>
        <div>
        <p>Nome do Produto</p>
        <p>Valor</p>
        <button>Adicionar ao Carrinho</button>
        </div>
        </StyledProduct>
        </>
    )
}