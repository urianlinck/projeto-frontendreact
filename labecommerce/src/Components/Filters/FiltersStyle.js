import { styled } from "styled-components"

export const StyledFilters = styled.div`
    grid-column: 1/3;
    grid-template-columns: 1/3;
    display: flex;
    position: sticky;
    top: 0px;
    flex-direction: column;
    border: 2px solid black;
    padding: 20px;
    gap: 10px;
    height: fit-content;

    input{
        border-color: aliceblue;
    }
`