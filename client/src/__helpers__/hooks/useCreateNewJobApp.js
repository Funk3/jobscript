//Custom hook for CreateNewJobApp

import { useCoverLetterContext } from "providers/CoverLetterProvider";
import { useCustomToneContext } from "providers/CustomToneProvider";
import { useJobDescContext } from "providers/JobDescProvider";
import { useManageCoverLetterContext } from "providers/ManageCoverLetterProvider";
import { useResumeContext } from "providers/ResumeProvider";


/**
 * Resets all states and error messages back to default.
 * @returns function handleAddNewJobClick to execute the above.
 */
export default function useCreateNewJobApp() {
  const { setFilename, setUploadedFile } = useResumeContext();
  const { setJobTitle, setCompanyName, setJobDescText } = useJobDescContext();
  const { setCustomTone } = useCustomToneContext();
  const {
    setCoverLetterText,
    setGenerateButtonVisible,
    setInputValidationError,
    setApiErrorResponse,
  } = useCoverLetterContext();

  const { setSaveSuccessState, setSaveFailureState, setCopySuccessState } =
    useManageCoverLetterContext();

  const handleAddNewJobClick = () => {
    //reset resume, job title, company name, desc, tone, coverletter states to default
    setFilename("Choose File");
    setUploadedFile();
    setJobTitle("");
    setCompanyName("");
    setJobDescText("");
    setCustomTone("");
    setCoverLetterText("");
    //clear all error messages
    setGenerateButtonVisible(true);
    setInputValidationError(false);
    setSaveSuccessState(false);
    setSaveFailureState(false);
    setCopySuccessState(false);
    setApiErrorResponse(false);
  };

  return {
    handleAddNewJobClick,
  };
}
