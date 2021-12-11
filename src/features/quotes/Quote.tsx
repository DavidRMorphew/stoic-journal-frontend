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
        console.log('light box click')
        console.log('current quote: ', props.currentQuoteToDisplay)
        console.log('stringified current quote: ', JSON.stringify(props.currentQuoteToDisplay))
        console.log('INSIDE FIRST CONDITION: ', !!(!props.currentQuoteToDisplay && (JSON.stringify(props.currentQuoteToDisplay) !== JSON.stringify(props.quoteData))))
        if (!props.currentQuoteToDisplay && JSON.stringify(props.currentQuoteToDisplay) !== JSON.stringify(props.quoteData)){
            console.log('inside first condition')
            props.selectQuoteForLightBox(props.quoteData)
        } else {
            props.selectQuoteForLightBox(null)
        }
        props.lightBoxDisplayed ? props.showLightBox(false) : props.showLightBox(true)
    }

    return (
        <div onClick={openQuoteInLightBox}>
            <small>Book {props.quoteData.book_num} Section {props.quoteData.section_num}</small>
            <p>"{props.quoteData.body}"</p>
            <p>(trans. {props.quoteData.translator_name})</p>
        </div>
    )
}

export default Quote