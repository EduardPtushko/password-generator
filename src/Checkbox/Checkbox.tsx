import React from 'react';
import { useField } from 'formik';

import { Input, InputGroup } from './style';

interface CheckboxProps {
    label: string;
    type: string;
    name: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, ...props }) => {
    const [field] = useField(props);

    return (
        <InputGroup>
            {label}
            <Input {...field} {...props} />
            <span></span>
        </InputGroup>
    );
};

export default Checkbox;
