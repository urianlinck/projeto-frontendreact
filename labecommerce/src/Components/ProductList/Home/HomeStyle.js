import { styled } from "styled-components";

export const HomeStyled = styled.div`
    display: grid;
    grid-column: 3/9;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 5%, 95%;
    border: 2px solid black;
    padding: 30px;
    gap: 10px;
    background-image: url(https://e0.pxfuel.com/wallpapers/224/35/desktop-wallpaper-purple-space-roxo.jpg);
    .header{
        display: flex;
        width: 100%;
        grid-column: 1/4;
        justify-content: space-between;

        select{
            background-color: purple;
            border-radius: 0.5rem;
            border: 2px solid goldenrod;
        }
    }
   .cartao{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        grid-column: 1/4;
        grid-row: 2/3;
        background-image: url(https://e0.pxfuel.com/wallpapers/224/35/desktop-wallpaper-purple-space-roxo.jpg);
    }
    
`