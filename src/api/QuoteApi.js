const apiBaseUrl = 'https://quote-garden.herokuapp.com/api/v3/'

async function getRandomQuote () {
    const apiUrl = `${ apiBaseUrl }quotes/random`

    const jsonResponse = await fetch(apiUrl)
                                    .then(res => res.json())

    const { data } = await jsonResponse;

    return data;
}

async function getQuotesOfAuthor (author) {
    const apiUrl = `${ apiBaseUrl }quotes/?author=${ author.trim() }`
    const jsonResponse = await fetch(apiUrl)
                                    .then(res => res.json())

    const { data } = await jsonResponse;

    return data;
}

export { getRandomQuote, getQuotesOfAuthor }