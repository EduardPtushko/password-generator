import React from 'react';
import { Container } from './style';

interface SnackBarProps {
    message: string;
    isCopied: boolean;
}

const SnackBar: React.FC<SnackBarProps> = ({ message, isCopied }) => {
    return <Container isCopied={isCopied}>{message}</Container>;
};

export default SnackBar;
