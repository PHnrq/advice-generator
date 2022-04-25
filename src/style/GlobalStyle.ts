import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{  
        //Reset
        font-size: 62.5%;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        text-decoration: none;
        list-style: none;
        //Colors
        --light-cyan: hsl(193, 38%, 86%);
        --neon-green: hsl(150, 100%, 66%);
        --grayish-blue: hsl(217, 19%, 30%);
        --dark-grayish-blue: hsl(217, 19%, 24%);
        //Fonts
        font-family: 'Manrope', sans-serif;
    }

    body{
        width: 100vw;
        height: 100vh;
        background: var(--dark-grayish-blue);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    
    @media (min-width: 1441px) {
        *{
            font-size: 100%;
        }
    }
`;