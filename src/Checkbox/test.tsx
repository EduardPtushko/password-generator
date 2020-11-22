import React from 'react';
import { render } from '@testing-library/react';
import Checkbox from './Checkbox';

describe.skip('Checkbox', () => {
    test('renders correctly', () => {
        const { getByText } = render(<Checkbox />);
    });
});
