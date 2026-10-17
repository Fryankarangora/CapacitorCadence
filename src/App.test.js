// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CapacitorCadence title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CapacitorCadence/i);
    expect(titleElement).toBeInTheDocument();
});
