import { styled } from "styled-components";

export const HomeStyled = styled.div`
    display: grid;
    grid-column: 3/9;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 5%, 95%;
    border: 2px solid black;
    padding: 20px;
    gap: 10px;
    
    .header{
        display: flex;
        width: 100%;
        grid-column: 1/4;
        justify-content: space-between;
    }
   .cartao{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        grid-column: 1/4;
        grid-row: 2/3;
   }
`