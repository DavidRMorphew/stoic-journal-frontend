import {useState, useEffect} from 'react'

const url = 'http://localhost:3001'

const Quotes = () => {

    const [quotes, setQuotes] = useState([])

    useEffect(() => {
        fetch(url + '/quotes')
        .then(resp => resp.json())
        .then(data => setQuotes(data))
    }, [setQuotes])

    return(
        <div>
            {console.log(quotes)}
            The Quotes Go Here!
        </div>
    )
}

export default Quotes