import { render, screen, waitFor, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

describe('App', () => {
  test('renders Quotations title', async () => {
    render(<App />);
    const titleElement = await screen.getByText(/Quotations/i);
    expect(titleElement).toBeInTheDocument();
  });
})