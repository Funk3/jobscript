//Handles and sets state based on the Tone selected

import { createContext, useContext, useState } from "react";

export const CustomToneContext = createContext();

export function CustomToneProvider(props) {
  const [customTone, setCustomTone] = useState();

  const handleClick = (newTone) => {
    
    setCustomTone(newTone);
  };

  const providerData = { customTone, handleClick, setCustomTone };

  return (
    <CustomToneContext.Provider value={providerData}>
      {props.children}
    </CustomToneContext.Provider>
  );
}

export const useCustomToneContext = () => useContext(CustomToneContext);