import { createContext, useState } from "react";

export const CustomLengthContext = createContext();

export default function CustomLengthProvider(props) {
  
  //props are coming in from App.js where the provider wraps the CustomLength component
  //eg  props.children = <CustomLength /> or something similar

  
  const [customLength, setCustomLength] = useState("Default");

  const handleChange = (newLength) => {
    setCustomLength(newLength);
  };

  const providerData = { customLength, handleChange};

  return (
    <CustomLengthContext.Provider value={providerData}>
      {props.children}
    </CustomLengthContext.Provider>
  );
}
