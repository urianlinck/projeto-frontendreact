import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
}

body{
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 16px
}
`