import React from 'react'

const Quote = ({quoteData/*: { body, book_num, section_num }*/}) => {
    return(
        <div>
            {console.log(quoteData)}
            {/* <small>Book {book_num} Section {section_num}</small> */}
            {/* <p>"{body}"</p> */}
        </div>
    )
}

export default Quote