import styled from 'styled-components';

export const Password = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    position: relative;
    transition: color 0.3s;

    &:hover button {
        color: #0000008a;
    }

    & button:hover {
        color: #54e0c7;
    }

    & input {
        margin-top: 0.5em;
        width: 100%;
        padding: 0.5em;
        font-size: 0.75rem;
        border: 1px solid #ccc;
        border-radius: 0.5em;
        letter-spacing: 1px;

        &::selection {
            background-color: #d4eae68a;
        }
    }
`;

export const Button = styled.button`
    position: absolute;
    top: 1.6em;
    right: 0.5em;
    z-index: 1;
    width: 1.5em;
    height: 1.5em;
    color: #00000012;
    border-radius: 0.1rem;
    cursor: pointer;
    transition: color 125ms;
    margin: 0;
    padding: 0;
    font-size: inherit;
    background: transparent;
    border: 0;

    svg {
        width: 1.125em;
        height: 1.125em;
        display: block;
        margin: 0 auto;
        fill: currentColor;
    }
`;
