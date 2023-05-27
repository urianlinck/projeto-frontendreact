import { styled } from "styled-components";

export const HomeStyled = styled.div`
    display: grid;
    grid-column: 3/9;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 5%, 5%, 90%;
    /* border: 2px solid goldenrod; */
    border-radius: 0.5rem;
    padding: 5px;
    gap: 10px;
    background: transparent;
    h1{
        display: grid;
        background: transparent;
        grid-row: 1/2;
        grid-column: 1/4;
        align-items: center;
        justify-content: center;
    }
    .header{
        display: grid;
        width: 100%;
        grid-column: 1/4;
        justify-content: space-between;
        background: transparent;
        grid-row: 2/3;
        align-items: center;
        
        select{
            background: transparent;
            border-radius: 0.5rem;
            border: 2px solid goldenrod;
            height: 20px;
            
            option{
                background-color: navy;

            }
        }
    }
   .cartao{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        grid-column: 1/4;
        grid-row: 3/4;
        background: transparent;
    }
    
`