import { Link } from 'react-router-dom';

import QuoteCard from '../../components/QuoteCard';
import ArrowRight from '../../assets/icons/arrow-right.svg'
import styles from './styles.module.css'

const Quote = ({ quote }) => (
    <section className={ styles["quote-container"] } >
    
        <QuoteCard quote={ quote } />

        <Link to={ `/author/${ quote.quoteAuthor }` } style={ { textDecoration: 'none' } }>
            <div className={ styles["quote-info"] }>
                <div>
                    <cite className={ styles["quote-info__author"] } >{ quote.quoteAuthor }</cite>
                    <p className={ styles["quote-info__genre"] } >{ quote.quoteGenre }</p>
                </div>
                <img src={ ArrowRight } alt="" className={ styles["arrow-icon"] } />
            </div>
        </Link>
    </section>
);

export default Quote;