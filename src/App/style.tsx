import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    * {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        padding: 0;
    }

    .intent-mouse input:focus, button:focus {
        outline: 0;
    }
   

    label {
        color: #1b1d1b;

    }
`;

export const AppContainer = styled.div`
    width: 310px;
    margin: 2em auto;
    border: 1px solid #ccc;
    border-radius: 0.5em;
    padding: 2em 2em;
    color: #333;
`;

export const Heading = styled.h1`
    margin: 0 0 1em;
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 0.5px;
    color: #1b1d1b;
    text-align: center;
`;
