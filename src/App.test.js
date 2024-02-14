import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should open and close modal when button is clicked', () => {
    const { getByText, getByTestId, queryByText } = render(<App />);
    expect(queryByText('Appointment Information')).toBeNull();
    
    fireEvent.click(getByTestId('modal-button'));
    expect(getByText('Appointment Information')).toBeInTheDocument();
    
    fireEvent.click(getByTestId('close-button'));
    expect(queryByText('Appointment Information')).toBeNull();
  });
});
