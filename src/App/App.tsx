import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import GeneratorForm from '../GeneratorForm/GeneratorForm';
import { AppContainer, Heading, GlobalStyle } from './style';

const App: React.FC = () => {
    useEffect(() => {
        const handleMouseDown = () => {
            window.document.body.classList.add('intent-mouse');
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Tab') {
                document.body.classList.remove('intent-mouse');
            }
        };
        window.document.addEventListener('mousedown', handleMouseDown);

        window.document.addEventListener('keydown', handleKeyDown);

        return () => {
            window.document.removeEventListener('mousedown', handleMouseDown);
            window.document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <>
            <GlobalStyle />
            <AppContainer>
                <Heading>Password Generator</Heading>
                <GeneratorForm />
            </AppContainer>
        </>
    );
};

export default hot(App);
