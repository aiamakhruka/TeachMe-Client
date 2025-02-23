import React from 'react';

const OpenStaxBook = ({ bookTitle, bookUrl }) => {
  return (
    <div>
      <h2>{bookTitle}</h2>
      <iframe
        src={bookUrl}
        width="100%"
        height="600px"
        title={bookTitle}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default OpenStaxBook;
