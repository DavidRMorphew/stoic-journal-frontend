import { QuoteData } from './Quotes'

interface LightBoxQuoteProps {
    quoteData: QuoteData|null;
}

const LightBoxQuote: React.FC<LightBoxQuoteProps> = (props) => {

    return(
        <div id="lightbox-quote-display">
            <h1><em>{props.quoteData!.work_name}</em> by {props.quoteData!.author_name}</h1>
            <h3>Book {props.quoteData!.book_num} Section {props.quoteData!.section_num}</h3>
            <h4>"{props.quoteData!.body}"</h4>
            <h3>(trans. {props.quoteData!.translator_name})</h3>
            <br></br>
        </div>
    )

}

export default LightBoxQuote 