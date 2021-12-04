import { render, screen, waitFor, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('App', () => {
  test('renders Quotations title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Quotations/i);
    expect(titleElement).toBeInTheDocument();
  });
})