import styles from './styles.module.css'

const QuoteCard = ({ quote }) => (
    <div className={ styles["quote-card"] }>
        <blockquote>
            "{ quote.quoteText }"
        </blockquote>
    </div>
)

export default QuoteCard