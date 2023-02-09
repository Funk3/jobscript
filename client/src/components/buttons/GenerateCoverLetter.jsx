import React from "react";
import { useCustomLengthContext } from "../../providers/CustomLengthProvider";
import { useCustomToneContext } from "../../providers/CustomToneProvider";
import { useJobDescContext } from "../../providers/JobDescProvider";
import { useResumeContext } from "../../providers/ResumeProvider";
import { useCoverLetterContext } from "../../providers/CoverLetterProvider";
import aiRequest from "../../__helpers__/routes/aiapi";
import createCustomToneAPIQuery from "../../__helpers__/custom_tone";
import createCustomLengthAPIQuery from "../../__helpers__/custom_length";

export default function GenerateCoverLetter(props) {
  const {setLoading} = props;
  //needs resumeText, Job Description Text, customTone, Custom Length
  const { uploadedFile } = useResumeContext();
  const { jobDescText } = useJobDescContext();
  const { customTone } = useCustomToneContext();
  const { customLength } = useCustomLengthContext();
  const { setCoverLetterText } = useCoverLetterContext();

  const toneAPIString = createCustomToneAPIQuery(customTone);
  const lengthAPIString = createCustomLengthAPIQuery(customLength);

  function handleGenerateCoverLetter() { 
    setLoading(true);
    aiRequest(uploadedFile, jobDescText, toneAPIString, lengthAPIString)
    .then(function(response){
      setCoverLetterText(response);
      setLoading(false);
    }).catch(function(error){
      console.log(error);
      //set state to error here
    });}
   

  return (
    <div>
      <button onClick={handleGenerateCoverLetter}>Generate Cover Letter</button>
    </div>
  );
}
