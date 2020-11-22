import React, { useState, useEffect } from 'react';

export const useCopied = (): [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>,
] => {
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        const id = setTimeout(() => {
            setIsCopied(false);
        }, 2000);

        return () => {
            clearTimeout(id);
        };
    }, [isCopied]);

    return [isCopied, setIsCopied];
};
