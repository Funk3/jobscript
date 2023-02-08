import React from "react";
import { useCustomLengthContext } from "../providers/CustomLengthProvider";
import { useCustomToneContext } from "../providers/CustomToneProvider";
import { useJobDescContext } from "../providers/JobDescProvider";
import { useResumeContext } from "../providers/ResumeProvider";
import aiRequest from "../__helpers__/routes/aiapi";
import createCustomToneAPIQuery from "../__helpers__/custom_tone";
import createCustomLengthAPIQuery from "../__helpers__/custom_length";

export default function GenerateCoverLetter() {
  //needs resumeText, Job Description Text, customTone, Custom Length
  const { uploadedFile } = useResumeContext();
  const { jobDescText } = useJobDescContext();
  const { customTone } = useCustomToneContext();
  const { customLength } = useCustomLengthContext();

  const toneAPIString = createCustomToneAPIQuery(customTone);
  const lengthAPIString = createCustomLengthAPIQuery(customLength);

  return (
    <div>
      <button onClick={() => aiRequest(uploadedFile, jobDescText, toneAPIString, lengthAPIString)}> Generate Cover Letter</button>
    </div>
  );
}
