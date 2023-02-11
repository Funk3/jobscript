import React from 'react';
import { useCoverLetterContext } from 'providers/CoverLetterProvider';

export default function Copy() {
  const { coverLetterText } = useCoverLetterContext();
  const handleCopy = () => {
    navigator.clipboard.writeText(coverLetterText);
    alert('Copied to clipboard!');
  };

  return <button onClick={handleCopy}>Copy</button>;
}
