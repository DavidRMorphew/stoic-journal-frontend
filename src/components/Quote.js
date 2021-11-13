import React from 'react'

const Quote = ({ quoteData: { body, book_num, section_num, translator_name } }) => {
    return(
        <div>
            <small>Book {book_num} Section {section_num}</small>
            <p>"{body}"</p>
            <p>(trans. {translator_name})</p>
        </div>
    )
}

export default Quote