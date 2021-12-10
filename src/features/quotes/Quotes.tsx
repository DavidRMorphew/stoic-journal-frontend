import { useEffect } from 'react';
import { addQuotes } from './quotesSlice';
import Quote from './Quote';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const url = 'http://localhost:3001'

export interface QuoteData {
    id: number,
    body: string, 
    book_num: number, 
    section_num: number, 
    translator_name: string,
    work_name: string 
}

const Quotes: React.FC = () => {
    const quotes: QuoteData[] = useAppSelector((state) => state.quotes.value);
    const dispatch = useAppDispatch();

    const fetchQuotations = async () => {
        const resp = await fetch(url + '/quotes');
        const data = await resp.json();
        const quotes: QuoteData[] = data.data?.map((quoteReturnFromDB: {attributes: QuoteData}) => quoteReturnFromDB.attributes);
        dispatch(addQuotes(quotes));
    }
    
    useEffect(() => {
        fetchQuotations();
    }, [])

    const renderQuotes = () => 
        quotes.map((q: QuoteData) => 
            <div 
                key={q.id} 
                data-testid={`quote-${q.id}`}
            >
                <Quote quoteData={q} />
            </div>
        )

    return(
        <div>
            <h1>Quotations</h1>
           {renderQuotes()} 
        </div>
    )
}



export default Quotes