import React, { useState, useEffect } from 'react';

import './bible.css';

const Bible = () => {
  const [book, setBook] = useState('John');
  const [quote, setQuote] = useState('For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.');
  const [chapter, setChapter] = useState('3');
  const [verse, setVerse] = useState('16');

  const bibleVerse = async () => {
    try {
      const response = await fetch('https://bible-api.com/data/web/random');
      const res = await response.json();
      setBook(res.random_verse.book);
      setChapter(res.random_verse.chapter);
      setVerse(res.random_verse.verse);
      setQuote(res.random_verse.text);
    } catch {
      setBook('loading....');
      setChapter('loading...');
      setVerse('loading...');
      setQuote('Please be patient we are facing some issues to load this page due to poor network. Check your connection and try again maybe you are behind a proxy.');
    }
  };
  useEffect(() => {
    setInterval(() => {
      bibleVerse();
    }, 20000);
  }, []);
  return (
    <div className='bible-container'>
        <div className="content-one">
        <h3>Bible verses</h3>
        </div>
        <div className="content-two">
        <h4>"{quote}"</h4>
        <h4>{book} : {chapter} vs {verse}</h4>
        </div>
    </div>
  );
};

export default Bible;