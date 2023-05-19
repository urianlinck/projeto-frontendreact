import React from "react";
import Items from "../Items/Items"
import { CartStyled } from "./CartStyle";

export default function Cart(){
    return(
        <>
        <CartStyled>
        <h2>Cart</h2>
        <Items/>
        </CartStyled>
        </>
    )
}