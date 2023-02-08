import { createContext, useState } from "react";

export const CoverLetterContext = createContext();

export default function CoverLetterProvider(props) {
  
  
  const [coverLetterText, setCoverLetterText] = useState("Default");

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
