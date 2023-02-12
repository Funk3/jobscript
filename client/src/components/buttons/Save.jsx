import React from 'react';

import { useManageCoverLetterContext } from 'providers/ManageCoverLetterProvider';

export default function Save() {

  const {handleSave} = useManageCoverLetterContext();
  
  return (
    <>
      <button className='coverletter-btn' onClick={handleSave}>
      <i class="fa-solid fa-floppy-disk"></i>
         Save
      </button>
    </>
  );
}
