import React, { Dispatch, SetStateAction } from 'react'
import { QuoteData } from './Quotes'

export interface QuoteProps {
    quoteData: QuoteData;
    showLightBox: Dispatch<SetStateAction<boolean>>;
    selectQuoteForLightBox: Dispatch<SetStateAction<QuoteData | null>>;
    lightBoxDisplayed: boolean;
    currentQuoteToDisplay: QuoteData|null;
}

const Quote: React.FC<QuoteProps> = (props) => {

    const openQuoteInLightBox = () => {
        if (!props.currentQuoteToDisplay && JSON.stringify(props.currentQuoteToDisplay) !== JSON.stringify(props.quoteData)){
            props.selectQuoteForLightBox(props.quoteData)
        } else {
            props.selectQuoteForLightBox(null)
        }
        props.lightBoxDisplayed ? props.showLightBox(false) : props.showLightBox(true)
    }

    return (
        <div className="quote-display" onClick={openQuoteInLightBox}>
            <em>{props.quoteData.work_name}</em>
                <br></br>
            <small>Book {props.quoteData.book_num} Section {props.quoteData.section_num}</small>
                <br></br>
            <small>by {props.quoteData.author_name}</small>
            <p>"{props.quoteData.body}"</p>
            <small>(trans. {props.quoteData.translator_name})</small>
            <br></br>
        </div>
    )
}

export default Quote