import { createContext, useState, useContext } from "react";

export const CoverLetterContext = createContext();

export function CoverLetterProvider(props) {

  //call openAI request here and get result back. Set useState(default to response from API)
  
  const [coverLetterText, setCoverLetterText] = useState("responseFromAPI");

  const handleChange = (newCoverLetterText) => {
    setCoverLetterText(newCoverLetterText);
  };

  const providerData = { coverLetterText, handleChange};

  return (
    <CoverLetterContext.Provider value={providerData}>
      {props.children}
    </CoverLetterContext.Provider>
  );
}

export const useCoverLetterContext = () => useContext(CoverLetterContext);