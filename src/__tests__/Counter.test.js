import React from 'react';
import { render, fireEvenet, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';


it('Correct stating text rendered', () => {
    const { container } = render(<Counter/>)
    expect(container.textContent).toContain("You've clicked 0 times")
});

it('Click incrmenet affects count', () => {
    const { container, getByTestId } = render(<Counter/>)

    const button = getByTestId('counter-button')

    expect(container.textContent).toContain("You've clicked 0 times!")
    fireEvent.click(button)
    expect(container.textContent).toContain("You've clicked 1 time!")
})