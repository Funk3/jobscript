import { useAuthContext } from 'providers/AuthProvider';
import { useCoverLetterContext } from 'providers/CoverLetterProvider';
import { useResumeContext } from 'providers/ResumeProvider';
import { useJobDescContext } from 'providers/JobDescProvider';

import React, { useState } from 'react';
import classnames from 'classnames';
import axios from 'axios';
import { useManageCoverLetterContext } from 'providers/ManageCoverLetterProvider';

export default function Save() {

  const {handleSave} = useManageCoverLetterContext();
  
  return (
    <>
      <button className='coverletter-btn' onClick={handleSave}>
        Save
      </button>
    </>
  );
}
