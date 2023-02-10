import React from 'react';
import axios from 'axios';
import { useCustomToneContext } from '../../providers/CustomToneProvider';
import { useJobDescContext } from '../../providers/JobDescProvider';
import { useResumeContext } from '../../providers/ResumeProvider';
import { useCoverLetterContext } from '../../providers/CoverLetterProvider';
import createCustomToneAPIQuery from '../../__helpers__/custom_tone';

export default function GenerateCoverLetter(props) {
  const { setLoading } = props;
  //needs resumeText, Job Description Text, customTone, Custom Length
  const { uploadedFile } = useResumeContext();
  const { jobDescText } = useJobDescContext();
  const { customTone } = useCustomToneContext();
  const { setCoverLetterText } = useCoverLetterContext();

  const toneAPIString = createCustomToneAPIQuery(customTone);

  const handleGenerateCoverLetter = () => {
    const promptParams = {
      uploadedFile,
      jobDescText,
      toneAPIString,
    };
    setLoading(true);
    axios
      .post('api/ai/openai', promptParams)
      .then((result) => {
        console.log('Data Sent');
        setCoverLetterText(result);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        //set state to error here
      });
  };

  return (
    <div>
      <button onClick={handleGenerateCoverLetter}>Generate Cover Letter</button>
    </div>
  );
}
