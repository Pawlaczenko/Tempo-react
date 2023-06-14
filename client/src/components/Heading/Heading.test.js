import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Heading from './Heading';

describe('Heading', () => {
  test('renders heading element with correct level and content', () => {
    const level = 2;
    const content = 'Test Heading';
    render(<Heading level={level}>{content}</Heading>);

    const headingElement = screen.getByRole(`heading`, { level });
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent(content);
  });
});
