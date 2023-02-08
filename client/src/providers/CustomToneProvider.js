import { createContext, useContext, useState } from "react";

export const CustomToneContext = createContext();

export function CustomToneProvider(props) {
  const [customTone, setCustomTone] = useState();

  const handleChange = (newTone) => {
    setCustomTone(newTone);
  };

  const providerData = { customTone, handleChange };

  return (
    <CustomToneContext.Provider value={providerData}>
      {props.children}
    </CustomToneContext.Provider>
  );
}

export const useCustomToneContext = () => useContext(CustomToneContext);