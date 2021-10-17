import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ModelsPreview from './ModelsPreview';

describe('<ModelsPreview />', () => {
  test('it should mount', () => {
    render(<ModelsPreview />);
    
    const modelsPreview = screen.getByTestId('ModelsPreview');

    expect(modelsPreview).toBeInTheDocument();
  });
});