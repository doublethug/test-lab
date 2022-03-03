import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ThreePlayer from './ThreePlayer';

describe('<ThreePlayer />', () => {
  test('it should mount', () => {
    render(<ThreePlayer />);
    
    const threePlayer = screen.getByTestId('ThreePlayer');

    expect(threePlayer).toBeInTheDocument();
  });
});