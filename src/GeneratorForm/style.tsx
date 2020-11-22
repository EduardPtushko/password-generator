import styled from 'styled-components';
import { Form } from 'formik';

export const FormWrapper = styled(Form)`
    display: flex;
    flex-direction: column;
`;

export const InputGroup = styled.div`
    display: flex;
    align-items: center;
    margin: 0.25em 0;

    & label {
        font-size: 1rem;
        margin-right: 0.5em;
    }

    & input[type='number'] {
        width: 100%;
        padding: 0.5em 0.75em;
        font-size: 0.75rem;
        border: 1px solid #ccc;
        border-radius: 0.5em;
    }
`;

export const ErrorDisplay = styled.div`
    color: #dc5252;
    margin-bottom: 0.25em;
`;

export const Button = styled.button`
    margin: 1.5em 0;
    border: 1px solid #54e0c7;
    padding: 0.75em;
    border-radius: 0.5em;
    font-size: 0.75rem;
    font-weight: 300;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    background-color: #54e0c7;
    color: #fff;
    transition: background-color 0.2s;
    &:hover {
        background-color: #54e0c7;
    }
    &:disabled {
        cursor: not-allowed;
    }
`;
