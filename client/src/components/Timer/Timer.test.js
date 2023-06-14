import React from 'react';
import { render, screen } from '@testing-library/react';
import Timer from './Timer';
import '@testing-library/jest-dom/extend-expect';

describe('Timer', () => {
  test('renders the timer with correct time format', () => {
    const time = { minutes: 5, seconds: 30 };
    render(<Timer time={time} />);

    const timerElement = screen.getByTestId('timer');
    expect(timerElement).toHaveTextContent('05:30');
  });

  test('renders the timer with zero-padded single-digit time', () => {
    const time = { minutes: 3, seconds: 4 };
    render(<Timer time={time} />);
  
    const timerElement = screen.getByTestId('timer');
    expect(timerElement).toHaveTextContent('03:04');
  });
  
  test('renders the timer with zero time when time object is undefined', () => {
    render(<Timer time={undefined} />);
  
    const timerElement = screen.getByTestId('timer');
    expect(timerElement).toHaveTextContent('00:00');
  });
});
