import { createContext, useState, useContext } from "react";

export const CoverLetterContext = createContext();

export function CoverLetterProvider(props) {

  //call openAI request here and get result back. Set useState(default to response from API)
  
  const [coverLetterText, setCoverLetterText] = useState();

  const handleChange = (newCoverLetterText) => {
    console.log("incoming new cover lterr text", newCoverLetterText);
    setCoverLetterText(newCoverLetterText);
  };

  const providerData = { coverLetterText, handleChange, setCoverLetterText};

  return (
    <CoverLetterContext.Provider value={providerData}>
      {props.children}
    </CoverLetterContext.Provider>
  );
}

export const useCoverLetterContext = () => useContext(CoverLetterContext);