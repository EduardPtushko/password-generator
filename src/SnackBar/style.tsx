import styled, { css } from 'styled-components';

interface Copied {
    readonly isCopied: boolean;
}

export const Container = styled.div<Copied>`
    display: flex;
    justify-content: space-between;
    min-width: 180px;
    padding: 0.75em;
    letter-spacing: 0.5px;
    position: fixed;
    bottom: 1.5em;
    right: 2em;
    border-radius: 0.25em;
    color: #fff;
    background-color: #292525db;
    opacity: 0;
    transform: translateY(100px);
    transition: all 0.3s;

    ${(props) =>
        props.isCopied &&
        css`
            opacity: 1;
            transform: translateY(0px);
        `}
`;
