//Handles cover letter text received from API and sets the state
//Tracks visibility of Generate button
//Error handling

import { createContext, useState, useContext } from "react";


export const CoverLetterContext = createContext();

export function CoverLetterProvider(props) {
  
  const [coverLetterText, setCoverLetterText] = useState();

  const [generateButtonVisible, setGenerateButtonVisible] = useState(true);

  const [inputValidationError, setInputValidationError] = useState(false);

  const [apiErrorResponse, setApiErrorResponse] = useState(false);

  //For any text manually edited in the cover letter text area
  const handleChange = (newCoverLetterText) => {
    setCoverLetterText(newCoverLetterText);
  };

  const providerData = {
    coverLetterText,
    handleChange,
    setCoverLetterText,
    generateButtonVisible,
    setGenerateButtonVisible,
    inputValidationError,
    setInputValidationError,
    apiErrorResponse,
    setApiErrorResponse
  };

  return (
    <CoverLetterContext.Provider value={providerData}>
      {props.children}
    </CoverLetterContext.Provider>
  );
}

export const useCoverLetterContext = () => useContext(CoverLetterContext);
