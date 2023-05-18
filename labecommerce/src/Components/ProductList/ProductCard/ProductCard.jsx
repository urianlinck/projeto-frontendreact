import React from "react";
import { StyledProduct } from "./ProductCardStyle";

export default function ProductCard(){
    return(
        <>
        <h3>Quantidade  de produtos:</h3>
        <StyledProduct>
        <p className="imagem">Product Card</p>
        <p>Nome do Produto</p>
        <p>Valor</p>
        <button>Adicionar ao Carrinho</button>
        </StyledProduct>
        </>
    )
}