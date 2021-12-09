import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addQuotes } from './quotesSlice';
import Quote from './Quote';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const url = 'http://localhost:3001'

export interface QuoteDataProps {
    id: number,
    body: string, 
    book_num: number, 
    section_num: number, 
    translator_name: string,
    work_name: string 
}

const Quotes = () => {

    // const [quotes, setQuotes] = useState([])

    const quotes: QuoteDataProps[] = useAppSelector((state) => state.quotes.value);
    const dispatch = useAppDispatch();

    const fetchQuotations = async () => {
        const resp = await fetch(url + '/quotes');
        const data = await resp.json();
        const quotes: QuoteDataProps[] = data.data?.map((q: any) => q.attributes);
        dispatch(addQuotes(quotes));
    }
    
    useEffect(() => {
        fetchQuotations();
    }, [quotes])

    const renderQuotes = () => {
        console.log(quotes)
        console.log(JSON.stringify(quotes) !== '[]')
        if (JSON.stringify(quotes) !== '[]') {
            // quotes.forEach((q: QuoteDataProps) => console.log(q))
            return quotes.map((q: QuoteDataProps, i: number, quotesArray: object[]) => <div key={q.id} data-testid={`quote-${q.id}`}><Quote quoteData={q} /></div>)
            // quotes.map((q: QuoteDataProps, i: number, quotesArray: object[]) => <div key={q.id} data-testid={`quote-${q.id}`}><Quote quoteData={q} /></div>)
        }
    }

    return(
        <div>
            <h1>Quotations</h1>
           {renderQuotes()} 
        </div>
    )
}



export default Quotes