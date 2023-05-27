import { styled } from "styled-components"

export const StyledFilters = styled.div`
    grid-column: 1/3;
    grid-template-columns: 1/3;
    display: flex;
    position: sticky;
    top: 0px;
    flex-direction: column;
    border-radius: 0.5rem;
    padding: 20px;
    gap: 10px;
    height: fit-content;
    background: transparent;
    input{
        border-color: aliceblue;
        background: transparent;
        border-radius: 0.5rem;
        border-color: goldenrod;
    }
    h2, label{
        background: transparent;
    }
`