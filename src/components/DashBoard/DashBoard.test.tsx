import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DashBoard from './DashBoard';

describe('<DashBoard />', () => {
  test('it should mount', () => {
    render(<DashBoard />);
    
    const dashBoard = screen.getByTestId('DashBoard');

    expect(dashBoard).toBeInTheDocument();
  });
});