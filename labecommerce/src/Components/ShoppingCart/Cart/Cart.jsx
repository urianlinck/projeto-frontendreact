import React from "react";
import Items from "../Items/Items"
import { CartStyled } from "./CartStyle";

export default function Cart({cart, setCart, amount, setAmount}){

    const onChangeCart = (event) => {
        setCart(event.target.value);
    };

    // const adicionaItem = () => {
    //     const amount = [...cart, setAmount];
    //     setLista(novaLista);
    //     setNovaTarefa("");}
    return(
        <>
        <CartStyled>
        <h2>Cart</h2>
        <Items/>
        </CartStyled>
        </>
    )
}