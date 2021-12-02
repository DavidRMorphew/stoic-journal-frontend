import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Quotations title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Quotations/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders a quotation with a Book Number and Section Number', async () => {
  const expectedReturnQuoteData = {
    quoteData: {
      author_name: "Marcus Aurelius",
      body: "From my grandfather Verus I learned good morals and the government of my temper.",
      book_num: "I",
      id: 1,
      section_num: 1,
      translator_name: "George Long",
      work_name: "Meditations",
    }
  }
  
  render(<App />);
  const quotationBookOneNumberOne = screen.getByText(/Book I Section I/)
  expect(quotationBookNumber).toBeInTheDocument();
})
