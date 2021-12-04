import React from 'react'

export interface QuoteProps {
    quoteData: { 
        body: string, 
        book_num: number, 
        section_num: number, 
        translator_name: string, 
    } 
}

const Quote = (props: QuoteProps) => {
    return (
        <div>
            {console.log(props)}
            <small>Book {props.quoteData.book_num} Section {props.quoteData.section_num}</small>
            <p>"{props.quoteData.body}"</p>
            <p>(trans. {props.quoteData.translator_name})</p>
        </div>
    )
}

export default Quote