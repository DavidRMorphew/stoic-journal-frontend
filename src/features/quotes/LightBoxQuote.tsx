import { QuoteData } from './Quotes'

interface LightBoxQuoteProps {
    quoteData: QuoteData|null;
}

const LightBoxQuote: React.FC<LightBoxQuoteProps> = (props) => {

    return(
        <div className="quote-display">
            <em>{props.quoteData!.work_name}</em>
                <br></br>
            <small>Book {props.quoteData!.book_num} Section {props.quoteData!.section_num}</small>
                <br></br>
            <small>by {props.quoteData!.author_name}</small>
            <p>"{props.quoteData!.body}"</p>
            <small>(trans. {props.quoteData!.translator_name})</small>
            <br></br>
        </div>
    )

}

export default LightBoxQuote 