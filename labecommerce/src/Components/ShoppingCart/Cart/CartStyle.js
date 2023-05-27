import { styled } from "styled-components";

export const CartStyled = styled.div`
    display: grid;
    grid-column: 9/11;
    position: sticky;
    top: 0px;
    border: 2px solid goldenrod;
    border-radius: 0.5rem;
    padding: 20px;
    gap: 10px;
    height: fit-content;
    background: transparent;

    h2, p{
        background: transparent;
    }
    buyButton{
        background: transparent;
        button{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 50px;
        width: 130px;
        border-radius: 10px;
        background: transparent;
        img{
            width: 50px;
            height: 50px;
            border-radius: 10px;
            background: transparent;
        }
        }
    }
`