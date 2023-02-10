import React from 'react';
import { saveAs } from 'file-saver';
import { useCoverLetterContext } from 'providers/CoverLetterProvider';

export default function Download() {
  const { coverLetterText } = useCoverLetterContext();

  const handleDownload = () => {
    console.log('cover letter', coverLetterText);
  };

  return <button onClick={handleDownload}>Download</button>;
}
