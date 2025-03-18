import React, { useEffect, useState } from 'react';

import './quote.css';

const Quote = () => {
  const [quote, setQuote] = useState('The harder you work for something, the greater you will feel when you achieve');
  const [author, setAuthor] = useState('MR KHAN BLISE');
  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
        method: 'GET',
        headers: { 'X-Api-Key': 'VBYixFl8vUY8+Gu8yob7iw==wyzA3zkD7bM06NC2' },
        contentType: 'application/json',
      });
      const res = await response.json();
      setQuote(res[0]?.quote);
      setAuthor(res[0]?.author);
    } catch (error) {
      setQuote('Please be patient we are facing some issues to load this page due to poor network. Check your connection and try again maybe you are behind a proxy.');
      setAuthor('loading...');
    }
  };
  useEffect(() => {
    const quotid = setInterval(() => {
      fetchQuote();
    }, 20000);
    return () => {
      clearInterval(quotid);
    };
  }, []);

  return (
        <div className='container-quote'>
            <div className='quote'>
                <h1>{author}</h1>
                <h2>"{quote}"</h2>
            </div>

        </div>
  );
};

export default Quote;