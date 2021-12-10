import React from 'react'
import { QuoteData } from './Quotes'

export interface QuoteProps {
    quoteData: QuoteData
}

const Quote: React.FC<QuoteProps> = (props) => {
    return (
        <div>
            <small>Book {props.quoteData.book_num} Section {props.quoteData.section_num}</small>
            <p>"{props.quoteData.body}"</p>
            <p>(trans. {props.quoteData.translator_name})</p>
        </div>
    )
}

export default Quote