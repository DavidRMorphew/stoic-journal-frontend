import React from 'react'
import { QuoteDataProps } from './Quotes'

export interface QuoteProps {
    quoteData: QuoteDataProps
}

const Quote = (props: QuoteProps) => {
    return (
        <div>
            <small>Book {props.quoteData.book_num} Section {props.quoteData.section_num}</small>
            <p>"{props.quoteData.body}"</p>
            <p>(trans. {props.quoteData.translator_name})</p>
        </div>
    )
}

export default Quote