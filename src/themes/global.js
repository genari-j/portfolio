import { createGlobalStyle } from "styled-components";
import { black9, white9, gray8 } from "./colors";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        border: none;
        outline: none;
        text-decoration: none;
        list-style: none;

        font-family: 'Poppins', Arial, sans-serif;
        font-weight: 400;
    }

    html {

        scroll-behavior: smooth;
        background: ${gray8};

        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
        
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    a {
        cursor: pointer;
        color: ${black9};
    }

    button {
        cursor: pointer;
    }

    .selected {
        color: ${white9};
    }
`