import {useState, useEffect} from 'react'
import Quote from './Quote'

const url = 'http://localhost:3001'

const Quotes = () => {

    const [quotes, setQuotes] = useState([])

    useEffect(() => {
        fetch(url + '/quotes')
        .then(resp => resp.json())
        .then(data => setQuotes(data))
    }, [setQuotes])

    const renderQuotes = () => quotes.map(q => <Quote key={q.id} quoteData={q} />)

    return(
        <div>
            <h1>Quotations</h1>
           {renderQuotes()} 
        </div>
    )
}

export default Quotes