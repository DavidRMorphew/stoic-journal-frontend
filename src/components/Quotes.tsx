import { useState, useEffect } from 'react'
import Quote from './Quote'

const url = 'http://localhost:3001'

const Quotes = () => {

    const [quotes, setQuotes] = useState([])

    const fetchQuotations = async () => {
        const resp = await fetch(url + '/quotes');
        const data = await resp.json();
        const quotes = data.data?.map((q: any) => q.attributes)
        setQuotes(quotes);
    }
    
    useEffect(() => {
        fetchQuotations();
    }, [])

    const renderQuotes = () => quotes?.map((q: QuoteDataProps) => <div key={q.id} data-testid={`quote-${q.id}`}><Quote quoteData={q} /></div>)

    return(
        <div>
            <h1>Quotations</h1>
           {renderQuotes()} 
        </div>
    )
}

export interface QuoteDataProps {
    id: number,
    body: string, 
    book_num: number, 
    section_num: number, 
    translator_name: string, 
}

export default Quotes