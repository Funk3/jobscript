import React, { useState } from "react";
import axios from "axios";
import { useCustomToneContext } from "../../providers/CustomToneProvider";
import { useJobDescContext } from "../../providers/JobDescProvider";
import { useResumeContext } from "../../providers/ResumeProvider";
import { useCoverLetterContext } from "../../providers/CoverLetterProvider";
import createCustomToneAPIQuery from "../../__helpers__/custom_tone";

export default function GenerateCoverLetter(props) {
  const { setLoading } = props;
  //needs resumeText, Job Description Text, customTone, Custom Length
  const { uploadedFile } = useResumeContext();
  const { jobTitle, companyName, jobDescText } = useJobDescContext();
  const { customTone } = useCustomToneContext();
  const { setCoverLetterText } = useCoverLetterContext("");

  const [errorValidation, setErrorValidation] = useState(false);

  const toneAPIString = createCustomToneAPIQuery(customTone);
  const checkValidStates = (fnToExecute) => {
    if (uploadedFile && jobTitle && companyName && jobDescText && customTone) {
      fnToExecute();
    } else {
      setErrorValidation("! All fields must be filled in.");
    }
  };

  const handleGenerateCoverLetter = () => {
    const promptParams = {
      uploadedFile,
      jobDescText,
      toneAPIString,
    };
    setLoading(true);
    axios
      .post("api/ai/openai", promptParams)
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
      {errorValidation && <p>{errorValidation}</p>}
      <div>
        <button
          className="generate-btn"
          onClick={() => checkValidStates(handleGenerateCoverLetter)}
        >
          <h2>Generate Cover Letter</h2>
        </button>
      </div>
    </>
  );
}
