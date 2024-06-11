import React from 'react';

const SavedQuotesList = ({ savedQuotes }) => {
  return (
    <div className="saved-quotes-list">
      <h2>Saved Quotes</h2>
      <ul>
        {savedQuotes.map((quote, index) => (
          <li key={index}>{quote}</li>
        ))}
      </ul>
    </div>
  );
};

export default SavedQuotesList;
