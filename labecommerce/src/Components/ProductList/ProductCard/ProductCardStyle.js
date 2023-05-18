import { styled } from "styled-components";

export const StyledProduct=styled.div`
    display: grid;
    grid-template-rows: 5% 95%;
    grid-template-columns: repeat(3, 1fr);
    Product {
        display: grid;
        grid-template-rows: 70% 30%;

        .imagem {
            display: grid;
            grid-column:1/2;
            border: 2px solid black;
        }

    }
`  