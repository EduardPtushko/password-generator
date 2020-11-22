import React from 'react';
import { render } from '@testing-library/react';
import App from '.';

describe('App component', () => {
    test('renders correctly', () => {
        const { getByText } = render(<App />);
        const h1 = getByText('Password Generator');

        expect(h1).toHaveTextContent('Password Generator');
    });
});
