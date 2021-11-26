import { useEffect, useState } from 'react'

import { getQuotesOfAuthor } from '../../api/QuoteApi'
import QuoteCard from '../../components/QuoteCard';

import styles from './styles.module.css'

const AuthorQuotes = ({ quote }) => {
    const [ authorQuotes, setAuthorQuotes ] = useState([]);

    useEffect( async()=> {
        const data = await getQuotesOfAuthor(quote.quoteAuthor)
        setAuthorQuotes(data)
    }, [quote])

    return (
        <main className={ styles["author-quotes-container"] } >
            <h1>{ quote.quoteAuthor }</h1>
            <section className={ styles["author-quotes"] } >
                {
                    authorQuotes.map(quote => <QuoteCard key={ quote._id } quote={ quote } />)
                }
            </section>
        </main>
    )
};

export default AuthorQuotes