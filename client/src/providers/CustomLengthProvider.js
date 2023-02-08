import { createContext, useState, useContext } from "react";

export const CustomLengthContext = createContext();

export function CustomLengthProvider(props) {
  
  //props are coming in from App.js where the provider wraps the CustomLength component
  //eg  props.children = <CustomLength /> or something similar

  
  const [customLength, setCustomLength] = useState();

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

export const useCustomLengthContext = () => useContext(CustomLengthContext);