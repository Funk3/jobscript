import { useCoverLetterContext } from "providers/CoverLetterProvider";
import { useCustomToneContext } from "providers/CustomToneProvider";
import { useJobDescContext } from "providers/JobDescProvider";
import { useResumeContext } from "providers/ResumeProvider";
import React from "react";

export default function CreateNewJobApp() {

  const {setFilename, setUploadedFile} = useResumeContext();
  const {setJobTitle, setCompanyName,setJobDescText} = useJobDescContext();
  const {setCustomTone} = useCustomToneContext();
  const {setCoverLetterText, setGenerateButtonVisible} = useCoverLetterContext();

  const handleAddNewJobClick = () => {
    //reset resume, job title, company name, desc, tone, coverletter states to default
    setFilename("Choose File");
    setUploadedFile();
    setJobTitle("");
    setCompanyName("");
    setJobDescText("");
    setCustomTone("");
    setCoverLetterText("");
    //make generate cover letter button visible again
    setGenerateButtonVisible(true);
  }

  return(
    <button onClick={handleAddNewJobClick} className="new-btn">+</button>
  )
}