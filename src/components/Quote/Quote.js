import React from 'react';

const Quote = ({ title, text }) => {
  return (
    <blockquote>
      <p>{text}</p>
      <footer>{title}</footer>
    </blockquote>
  );
};

export default Quote;
