import React, { useEffect } from "react";
import Items from "../Items/Items"
import { CartStyled } from "./CartStyle";
import { render } from "@testing-library/react";
import gems from "../../../assets/gems.png"

export default function Cart({ productList, cart, setCart, amount, setAmount}){

    const removeItem = (id)=>{
        cart.map((product)=>{
            if(product.id === id && product.quantity >= 1){
                product.quantity = product.quantity-1
                setCart([...cart])
            }
            if(product.quantity === 0){
                const newCart = cart.filter(productRemoved => productRemoved.quantity !== 0)
                setCart(newCart)
                if(cart.length === 1){
                    localStorage.removeItem("cartKey")
                }
            }
            
        })
    }

    useEffect(()=>{
        let newValue = 0
        console.log(cart)
        cart.forEach((product)=>{
            newValue += product.value * product.quantity
        })
        setAmount(newValue)
    }, [cart])

    useEffect(() => {
        if(cart.length>0){
            localStorage.setItem("cartKey",JSON.stringify(cart))
        }
    }, [cart])

    useEffect(()=>{
        const restoredCart = localStorage.getItem("cartKey");
        if(restoredCart){
            setCart(JSON.parse(restoredCart));
        }
    }, [])


    const renderItemsOnCart = cart.map((product)=>{
        return <Items
        key={product.id} 
        name={product.name}
        value={product.value * product.quantity}
        quantity={product.quantity}
        removeItem={removeItem}
        id={product.id}/>
    })
    
    return(
        <>
        <CartStyled>
        <h2>Carrinho</h2>
        {renderItemsOnCart}
        <br/>
        <p> Total: {amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        <buyButton>
        <button onClick={()=>{ alert('Essa função ainda não está pronta. Retorne em alguns meses.'); }}>Comprar <img src={gems}/></button>
        </buyButton>
        </CartStyled>
        </>
    )
}