// src/components/TypingTitle.jsx
import { useState, useEffect } from 'react';

export default function TypingTitle({ text, speed = 100, className = '' }) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayed(prev => prev + text.charAt(index));
      index++;
      if (index >= text.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <h1 className={`${className} inline-block`}>
      {displayed}
    </h1>
  );
}
