import { styled } from "styled-components";

export const StyledProduct=styled.div`
    height: 400px;
    width: 250px;
    border: 3px solid goldenrod;
    font-size: 14px;
    border-radius: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
    img{
        width: 100%;
        height: 300px;
        border-radius: 10px;
        object-fit: cover;
    }
    div{
        width: 100%;
        border-radius: 10px;
        p{
            margin: 5px;
        }
        .sidebutton{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            p{
                width: 20%;
            }
        }
    }  
    button{
        height: 50px;
        width: 50px;
        transform: translateX(-50%);
        background-color: purple;
        border-radius: 10px;
        img{
            width: 50px;
            height: 50px;
        }
    }
`  