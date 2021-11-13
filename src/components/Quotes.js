import {useState, useEffect} from 'react'
import Quote from './Quote'

const url = 'http://localhost:3001'

const Quotes = () => {

    const [quotes, setQuotes] = useState([])

    useEffect(() => {
        fetch(url + '/quotes')
        .then(resp => resp.json())
        .then(data => {
            const quotes = data.data.map(q => q.attributes)
            setQuotes(quotes)
        })
    }, [])

    const renderQuotes = () => quotes.map(q => <Quote key={q.id} quoteData={q} />)

    return(
        <div>
            <h1>Quotations</h1>
            {console.log(quotes)}
           {renderQuotes()} 
        </div>
    )
}

export default Quotes