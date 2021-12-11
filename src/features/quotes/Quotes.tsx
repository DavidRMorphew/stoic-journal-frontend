import { useEffect, useState } from 'react';
import { addQuotes } from './quotesSlice';
import Quote from './Quote';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import LightBoxQuote from './LightBoxQuote';

const url = 'http://localhost:3001'

export interface QuoteData {
    id: number;
    body: string; 
    book_num: number; 
    section_num: number; 
    translator_name: string;
    work_name: string;
    author_name: string; 
}

const Quotes: React.FC = () => {
    const quotes: QuoteData[] = useAppSelector((state) => state.quotes.value);
    const dispatch = useAppDispatch();
    const [shouldDisplayLightBox, setShouldDisplayLightBox] = useState<boolean>(false);
    const [quoteToDisplay, setQuoteToDisplay] = useState<QuoteData|null>(null);

    const fetchQuotations = async () => {
        const resp = await fetch(url + '/quotes');
        const data = await resp.json();
        const quotes: QuoteData[] = data.data?.map((quoteReturnFromDB: {attributes: QuoteData}) => quoteReturnFromDB.attributes);
        dispatch(addQuotes(quotes));
    }

    const clearLightBoxWhenClicked = () => {
        setShouldDisplayLightBox(false);
        setQuoteToDisplay(null);
    }
    
    useEffect(() => {
        fetchQuotations();
    }, [])

    const renderQuotes = () => 
        quotes.map((q: QuoteData) => 
            <div 
                key={q.id} 
                data-testid={`quote-${q.id}`}
                className="quote-display"
            >
                <Quote 
                    quoteData={q} 
                    showLightBox={setShouldDisplayLightBox} 
                    selectQuoteForLightBox={setQuoteToDisplay} 
                    lightBoxDisplayed={shouldDisplayLightBox}
                    currentQuoteToDisplay={quoteToDisplay} 
                />
            </div>
        )

    return(
        <div>
            { shouldDisplayLightBox ?
        <div id="lightbox" onClick={clearLightBoxWhenClicked}>
            <LightBoxQuote quoteData={quoteToDisplay}/>
        </div>
        : '' }
            <h1>Quotations</h1>
           {renderQuotes()} 
        </div>
    )
}



export default Quotes