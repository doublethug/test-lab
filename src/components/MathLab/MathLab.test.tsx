import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MathLab from './MathLab';

describe('<MathLab />', () => {
  test('it should mount', () => {
    render(<MathLab />);
    
    const mathLab = screen.getByTestId('MathLab');

    expect(mathLab).toBeInTheDocument();
  });
});