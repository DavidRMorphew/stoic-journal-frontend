import React from 'react'

interface QuoteProps {
    quoteData: { 
        body: string, 
        book_num: string, 
        section_num: string, 
        translator_name: string, 
    } 
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