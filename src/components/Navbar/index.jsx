import { getRandomQuote } from '../../api/QuoteApi';

import renewSvg from '../../assets/icons/renew.svg'
import styles from './styles.module.css'

const Navbar = ({ onClick }) => {

    const handleClick = async () => {
        const [ randomQuote ] = await getRandomQuote()
        onClick(randomQuote);
    }

    return (
        <nav className={ styles["navbar"] }>
            <p
                className={ styles["random-button"] }
                role="button"
                onClick={ ()=> handleClick() }
            >
                random
                <img src={ renewSvg } alt="" className={ styles["renew-icon"] } />
            </p>
        </nav>
    )
};

export default Navbar;