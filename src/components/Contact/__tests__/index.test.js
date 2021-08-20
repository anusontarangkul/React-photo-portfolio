import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact component', () => {
    it('renders', () => {
        render(<Contact
        />)
    })
})

describe('Contact component', () => {
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Contact
        />);
        expect(asFragment()).toMatchSnapshot();
    })
})

describe('Contact me', () => {
    it('matches data-testid in h1 tag', () => {
        const { getByTestId } = render(<Contact />)
        expect(getByTestId('contact')).toHaveTextContent('Contact Me');
    })
})

describe('Submit button', () => {
    it('matches button value', () => {
        const { getByTestId } = render(<Contact />)
        expect(getByTestId('submit')).toHaveTextContent('Submit');
    })
})