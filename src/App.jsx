import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { getRandomQuote } from './api/QuoteApi'
import Layout from './layout/'
import Quote from './pages/Quote/'
import AuthorQuotes from './pages/AuthorQuotes/'

function App() {

  const [ quote, setQuote ] = useState({
    quoteText: '',
    quoteAuthor: '',
    quoteGenre: ''
  })

  useEffect(async ()=> {
    const [ randomQuote ] = await getRandomQuote()
    setQuote(randomQuote)
  }, [])

  const handleClick = (generatedQuote) => {
    setQuote(generatedQuote)
  }

  return (
    <BrowserRouter>
      <Layout onClick={ handleClick }>
        <Routes>
          <Route path="" index element={ <Quote quote={ quote } /> } />
          <Route path="/author/:author" element={ <AuthorQuotes quote={ quote } /> } />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
