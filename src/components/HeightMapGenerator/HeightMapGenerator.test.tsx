import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeightMapGenerator from './HeightMapGenerator';

describe('<HeightMapGenerator />', () => {
  test('it should mount', () => {
    render(<HeightMapGenerator />);
    
    const heightMapGenerator = screen.getByTestId('HeightMapGenerator');

    expect(heightMapGenerator).toBeInTheDocument();
  });
});