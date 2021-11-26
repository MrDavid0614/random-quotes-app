import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { getQuotesOfAuthor } from '../../api/QuoteApi'
import QuoteCard from '../../components/QuoteCard'
import Loading from '../../components/Loading'
import ArrowRight from '../../assets/icons/arrow-right.svg'

import styles from './styles.module.css'

const AuthorQuotes = ({ quote }) => {
    const [ authorQuotes, setAuthorQuotes ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect( async() => {
        setLoading(true)
        const data = await getQuotesOfAuthor(quote.quoteAuthor)
        setAuthorQuotes(data)
        setLoading(false)
    }, [quote])

    return (
        <main className={ styles["author-quotes-container"] } >
            <Link to="/" style={{ width: '50px' }} >
                <img src={ ArrowRight } alt="" className={ styles["arrow-icon"] } />
            </Link>
            {
                loading ? 
                    <Loading />
                :
                    (
                        <section className={ styles["author-quotes"] } >
                            <h1 className={ styles["author-name"] } >
                                { quote.quoteAuthor }
                            </h1>
                            {
                                authorQuotes.map(quote => <QuoteCard key={ quote._id } quote={ quote } />)
                            }
                        </section>
                    )
            }
        </main>
    )
};

export default AuthorQuotes