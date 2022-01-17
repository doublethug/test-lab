import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FourDPlayer from './FourDPlayer';

describe('<FourDPlayer />', () => {
  test('it should mount', () => {
    render(<FourDPlayer />);
    
    const fourDPlayer = screen.getByTestId('FourDPlayer');

    expect(fourDPlayer).toBeInTheDocument();
  });
});