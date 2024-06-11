import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuoteCard from './Components/QuoteCard';
import SavedQuotesList from './Components/SavedQuotesList';
import './App.css';

const App = () => {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  const fetchQuote = async () => {
    const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
    setQuote(response.data[0]);
  };

  const saveQuote = (quote) => {
    setSavedQuotes([...savedQuotes, quote]);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="app">
      <h1>Ron Swanson Quotes</h1>
      <QuoteCard quote={quote} saveQuote={saveQuote} />
      <button onClick={fetchQuote}>Get New Quote</button>
      <SavedQuotesList savedQuotes={savedQuotes} />
    </div>
  );
};

export default App;
