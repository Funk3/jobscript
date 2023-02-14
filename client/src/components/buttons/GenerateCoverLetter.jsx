import React from 'react';
import axios from 'axios';
import { useCustomToneContext } from '../../providers/CustomToneProvider';
import { useJobDescContext } from '../../providers/JobDescProvider';
import { useResumeContext } from '../../providers/ResumeProvider';
import { useCoverLetterContext } from '../../providers/CoverLetterProvider';

export default function GenerateCoverLetter(props) {
  const { setLoading } = props;
  const { uploadedFile } = useResumeContext();
  const { jobTitle, companyName, jobDescText } = useJobDescContext();
  const { customTone } = useCustomToneContext();
  const { setCoverLetterText, setGenerateButtonVisible, generateButtonVisible, inputValidationError, setInputValidationError, apiErrorResponse, setApiErrorResponse} = useCoverLetterContext();

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
        setApiErrorResponse(false);
        console.log("successful api response");
      })
      .catch(function (error) {
        setLoading(false);
        setGenerateButtonVisible(true);
        setApiErrorResponse(error.message);
        console.log("front end error", error.message);
        //set state to error here
      });
  };

  return (
    <>
      {generateButtonVisible && (
        <>
          <h3>4. You're all set! </h3>
          {inputValidationError && <p className="error-message">{inputValidationError}</p>}
          {apiErrorResponse && <p className="error-message">Hmm.. there seems to be a problem with the AI response : {apiErrorResponse}</p>}
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

