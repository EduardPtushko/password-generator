type Props = {
    length: number;
    inputLetters: boolean;
    inputNumbers: boolean;
    inputSymbols: boolean;
};

export const generatePassword = ({
    length,
    inputLetters,
    inputNumbers,
    inputSymbols,
}: Props) => {
    const numbers = '0123456789';
    const letters = 'abcdefghijklmnopqrstuvwyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if (inputNumbers) {
        validChars += numbers;
    }
    if (inputLetters) {
        validChars += letters;
    }
    if (inputSymbols) {
        validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * validChars.length);
        generatedPassword += validChars[index];
    }

    return generatedPassword;
};
