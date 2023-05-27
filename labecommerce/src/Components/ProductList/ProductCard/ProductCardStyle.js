import { styled } from "styled-components";

export const StyledProduct=styled.div`
    height: 400px;
    width: 250px;
    border: 3px solid goldenrod;
    font-size: 14px;
    border-radius: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
    background: transparent;
    img{
        width: 100%;
        height: 300px;
        border-radius: 10px;
        object-fit: cover;
        background: transparent;
    }
    
    div{
        width: 100%;
        border-radius: 10px;
        background: transparent;
        p{
            margin: 5px;
            background: transparent;
        }
        .sidebutton{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: transparent;
            p{
                width: 20%;
                background: transparent;
            }
        }
    }  
    button{
        height: 50px;
        width: 50px;
        transform: translateX(-50%);
        border-color: goldenrod;
        border-radius: 10px;
        background: transparent;
        img{
            width: 50px;
            height: 50px;
            border-radius: 10px;
            background: transparent;
        }
    }
`  