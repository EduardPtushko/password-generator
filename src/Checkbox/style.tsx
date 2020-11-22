import styled from 'styled-components';

export const InputGroup = styled.label`
    background-color: #fff;
    margin: 5px 0;
    position: relative;
    cursor: pointer;

    & span {
        padding: 12px 12px;
        left: 90%;
        top: -3px;
        display: block;
        color: #3c454c;
        cursor: pointer;
        position: absolute;
        z-index: 2;
        transition: color 200ms ease-in;
        overflow: hidden;
    }

    & span:after {
        width: 20px;
        height: 20px;
        content: '';
        border: 1px solid #ccc;
        background-color: #fff;
        background-image: url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E ");
        background-repeat: no-repeat;
        background-position: 2px 2px;
        border-radius: 50%;
        z-index: 2;
        position: absolute;
        transform: translate(-50%, -50%);
        cursor: pointer;
        transition: all 200ms ease-in;
    }
`;

export const Input = styled.input`
    width: 20px;
    height: 20px;
    z-index: 2;
    position: absolute;
    left: 90%;
    top: -3px;
    visibility: hidden;

    &:checked ~ span {
        color: #fff;
    }

    &:checked ~ span:after {
        background-color: #54e0c7;
        border-color: #54e0c7;
    }
`;
