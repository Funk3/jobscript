import React, { useState } from 'react';
import axios from 'axios';
import { useCustomToneContext } from '../../providers/CustomToneProvider';
import { useJobDescContext } from '../../providers/JobDescProvider';
import { useResumeContext } from '../../providers/ResumeProvider';
import { useCoverLetterContext } from '../../providers/CoverLetterProvider';
import createCustomToneAPIQuery from '../../__helpers__/custom_tone';

export default function GenerateCoverLetter(props) {
  const { setLoading } = props;
  const { uploadedFile } = useResumeContext();
  const { jobTitle, companyName, jobDescText } = useJobDescContext();
  const { customTone } = useCustomToneContext();
  const { setCoverLetterText, setGenerateButtonVisible, generateButtonVisible, inputValidationError, setInputValidationError} = useCoverLetterContext();

  // const toneAPIString = createCustomToneAPIQuery(customTone);

  const checkValidStates = (fnToExecute) => {
    if (uploadedFile && jobTitle && companyName && jobDescText && customTone) {
      fnToExecute();
      setGenerateButtonVisible(false);
      setInputValidationError(false);
    } else {
      setInputValidationError('All fields must be filled in before submitting.');
    }
  };

  const handleGenerateCoverLetter = () => {
    const promptParams = {
      uploadedFile,
      jobDescText,
      customTone,
    };
    setLoading(true);
    axios
      .post('api/ai/openai', promptParams)
      .then((result) => {
        setCoverLetterText(result.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        //set state to error here
      });
  };

  return (
    <>
      {generateButtonVisible && (
        <>
          <h3>4. You're all set! </h3>
          {inputValidationError && <p className="error-message">{inputValidationError}</p>}
           <div>
            <button
              className="generate-btn"
              onClick={() => checkValidStates(handleGenerateCoverLetter)}
            >
              <h2>Generate Cover Letter</h2>
            </button>
          </div>
        </>
      )}
    </>
  );
}

