import React from "react";
import { StyledProduct } from "./ProductCardStyle";
import rocket from "../../../assets/rocket.png"

export default function ProductCard({addToCart, product}){

    return(
        <>
        <StyledProduct>
        <img src={product.imageUrl}/>
        <div>
        <p>{product.name}</p>
        <div className="sidebutton">
        <p>{Number(product.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        
        <button onClick={()=>addToCart(product)}> <img src={rocket} title="Adicionar o carrinho"/> </button>
        </div>
        </div>
        </StyledProduct>
        </>
    )
}