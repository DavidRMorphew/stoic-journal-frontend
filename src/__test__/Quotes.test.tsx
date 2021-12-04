import React from 'react';
import { render, screen, fireEvent, prettyDOM } from "@testing-library/react";
import Quotes from '../components/Quotes';
import {rest} from 'msw';
import {setupServer} from 'msw/node';

describe('<Quotes />', () => {
  let expectedPromiseResult: { data: { attributes: { author_name: string; body: string; book_num: string; id: string; section_num: string; translator_name: string; work_name: string; }; id: string; type: string; }[]; };

  const mockServer = setupServer(
    rest.get('http://localhost:3001/quotes', (req, res, ctx) => {
      return res(ctx.json(expectedPromiseResult))
    }),
  )
  
  beforeAll(() => 
    mockServer.listen()
  );

  afterEach(() => 
    mockServer.resetHandlers()
  );
  
  afterAll(() => 
    mockServer.close()
  );

  expectedPromiseResult = { data: [{
    attributes: {
      author_name: "Marcus Aurelius",
      body: "From my grandfather Verus I learned good morals and the government of my temper.",
      book_num: "I",
      id: '1',
      section_num: '1',
      translator_name: "George Long",
      work_name: "Meditations",
    },
    id: "1",
    type: "Quote",
    }]
  
}   

test('should display a quote on the page', async () => {
  render(<Quotes />);
    const { findByTestId } = render(<Quotes />)

    const firstQuote = await findByTestId('quote-1');

    expect(firstQuote).toBeInTheDocument();
  })
})


