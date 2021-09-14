import React from 'react'

const Quote = ({quoteData: { body }}) => {
    return(
        <div>
            <p>"{body}"</p>
        </div>
    )
}

export default Quote