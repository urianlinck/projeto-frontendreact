import { styled } from "styled-components";

export const HomeStyled = styled.div`
    display: grid;
    grid-column: 3/9;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 5%, 95%;
    /* border: 2px solid goldenrod; */
    border-radius: 0.5rem;
    padding: 5px;
    gap: 10px;
    background: transparent;
    h1{
        background: transparent;
    }
    .header{
        display: flex;
        width: 100%;
        grid-column: 1/4;
        justify-content: space-between;
        background: transparent;

        select{
            background: transparent;
            border-radius: 0.5rem;
            border: 2px solid goldenrod;
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
        grid-row: 2/3;
        background: transparent;
    }
    
`