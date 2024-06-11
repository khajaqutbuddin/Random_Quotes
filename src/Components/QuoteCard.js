import React from 'react';

const QuoteCard = ({ quote, saveQuote }) => {
  return (
    <div className="quote-card">
      <p>{quote}</p>
      <button onClick={() => saveQuote(quote)}>Save</button>
    </div>
  );
};

export default QuoteCard;
