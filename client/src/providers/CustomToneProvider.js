import { createContext, useState } from "react";

export const CustomToneContext = createContext();

export default function CustomToneProvider(props) {
  const [customTone, setCustomTone] = useState("Default");

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