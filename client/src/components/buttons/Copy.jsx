import React, { useState } from 'react';
import classnames from 'classnames';
import { useCoverLetterContext } from 'providers/CoverLetterProvider';
import { useManageCoverLetterContext } from 'providers/ManageCoverLetterProvider';

export default function Copy() {
  const { handleCopy} = useManageCoverLetterContext();


  return (
    <>
      <button className='coverletter-btn' onClick={handleCopy}>
      <i class="fa-regular fa-copy"></i>
        Copy
      </button>
    </>
  );
}
