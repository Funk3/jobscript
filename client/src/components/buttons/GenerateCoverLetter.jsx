import React from "react";
import { useCustomLengthContext } from "../../providers/CustomLengthProvider";
import { useCustomToneContext } from "../../providers/CustomToneProvider";
import { useJobDescContext } from "../../providers/JobDescProvider";
import { useResumeContext } from "../../providers/ResumeProvider";
import { useCoverLetterContext } from "../../providers/CoverLetterProvider";
import aiRequest from "../../__helpers__/routes/aiapi";
import createCustomToneAPIQuery from "../../__helpers__/custom_tone";
import createCustomLengthAPIQuery from "../../__helpers__/custom_length";

export default function GenerateCoverLetter() {
  //needs resumeText, Job Description Text, customTone, Custom Length
  const { uploadedFile } = useResumeContext();
  const { jobDescText } = useJobDescContext();
  const { customTone } = useCustomToneContext();
  const { customLength } = useCustomLengthContext();
  const { setCoverLetterText } = useCoverLetterContext();

  const toneAPIString = createCustomToneAPIQuery(customTone);
  const lengthAPIString = createCustomLengthAPIQuery(customLength);

  function onClick() { 
    let aiAPI = new Promise(function(resolve, reject){
      resolve(aiRequest(uploadedFile, jobDescText, toneAPIString, lengthAPIString))
      reject(console.log("Sorry bud"))
     })

    aiAPI.then(function(response){
      setCoverLetterText(response)
    }).catch(function(error){
      console.log(error)
    });}
   

  return (
    <div>
      <button onClick={() => onClick()}>Generate Cover Letter</button>
    </div>
  );
}
