import React, { useRef } from 'react';
import { useField } from 'formik';
import { Password, Button } from './style';
import SnackBar from '../SnackBar/SnackBar';
import { useCopied } from './useCopied';

interface GeneratedPasswordProps {
    name: 'password';
    type: 'text';
}

const GeneratedPassword: React.FC<GeneratedPasswordProps> = (props) => {
    const [field] = useField(props);
    const [isCopied, setIsCopied] = useCopied();
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (passwordRef.current) {
            passwordRef.current.select();
            document.execCommand('copy');
            setIsCopied(true);
        }
    };

    return (
        <Password>
            <label htmlFor='password'>Your Password</label>
            <Button title='Copy to clipboard' onClick={handleClick}>
                <svg viewBox='0 0 24 24'>
                    <path d='M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z'></path>
                </svg>
            </Button>
            <input ref={passwordRef} {...field} {...props} spellCheck='false' />

            <SnackBar message='Copied to clipboard' isCopied={isCopied} />
        </Password>
    );
};

export default GeneratedPassword;
