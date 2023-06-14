/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import '@testing-library/jest-dom/extend-expect';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('SearchBar', () => {
  beforeEach(() => {
    useNavigate.mockClear();
  });

  test('renders correctly with default props', () => {
    const { getByPlaceholderText } = render(<SearchBar />);
    const inputElement = getByPlaceholderText('Search');
    expect(inputElement).toBeInTheDocument();
  });

  test('renders correctly with custom placeholder', () => {
    const { getByPlaceholderText } = render(<SearchBar placeholder="Custom Placeholder" />);
    const inputElement = getByPlaceholderText('Custom Placeholder');
    expect(inputElement).toBeInTheDocument();
  });

  test('updates query state on input change', () => {
    const { getByPlaceholderText } = render(<SearchBar />);
    const inputElement = getByPlaceholderText('Search');
    fireEvent.change(inputElement, { target: { value: 'test query' } });
    expect(inputElement.value).toBe('test query');
  });

  test('navigates to the correct URL on form submission', () => {
    const navigateMock = jest.fn();
    useNavigate.mockImplementation(() => navigateMock);

    const { getByPlaceholderText, getByTestId } = render(<SearchBar />);
    const inputElement = getByPlaceholderText('Search');
    const formElement = getByTestId('search-bar-form');

    fireEvent.change(inputElement, { target: { value: 'hello' } });
    fireEvent.submit(formElement);

    expect(navigateMock).toHaveBeenCalledWith('/songs/search?query=hello');
  });
});