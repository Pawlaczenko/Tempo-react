import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import TopInUsButton from './TopInUsButton';
import '@testing-library/jest-dom/extend-expect';

// Mock the useNavigate hook
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('TopInUsButton', () => {
  beforeEach(() => {
    // Reset the mock implementation for each test
    useNavigate.mockReset();
  });

  test('renders button with text and icon', () => {
    render(<TopInUsButton />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Get top songs in US');
    expect(buttonElement).toContainHTML('<svg class="react-icons"');
  });

  test('navigates to the correct URL on button click', () => {
    const navigate = jest.fn();
    useNavigate.mockImplementation(() => navigate);

    render(<TopInUsButton />);
    const buttonElement = screen.getByRole('button');

    fireEvent.click(buttonElement);
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith('/songs/search');
  });
});