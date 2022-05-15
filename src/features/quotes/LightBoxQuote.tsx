import { QuoteData } from './Quotes'
import React from "react";
import { useScreenSize } from "../../utils/useScreenSize";

interface LightBoxQuoteProps {
    quoteData: QuoteData|null;
}

const LightBoxQuote: React.FC<LightBoxQuoteProps> = (props) => {

    return(
        <>
        { useScreenSize() === 'mobile' ?
            <div id="lightbox-quote-display-mobile">
                <h1><em>{props.quoteData!.work_name}</em> by {props.quoteData!.author_name}</h1>
                <h2>Book {props.quoteData!.book_num} Section {props.quoteData!.section_num}</h2>
                <h3>"{props.quoteData!.body}"</h3>
                <h2>(trans. {props.quoteData!.translator_name})</h2>
                <br></br>
            </div>
            :
            <div id="lightbox-quote-display">
                <h3><em>{props.quoteData!.work_name}</em> by {props.quoteData!.author_name}</h3>
                <h3>Book {props.quoteData!.book_num} Section {props.quoteData!.section_num}</h3>
                <p>"{props.quoteData!.body}"</p>
                <h4>(trans. {props.quoteData!.translator_name})</h4>
                <br></br>
            </div>
        }
        </>
    )
}

export default LightBoxQuote 