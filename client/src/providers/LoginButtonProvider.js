import React, { useContext, useState, createContext } from "react";

export const LoginButtonContext = createContext();

export function LoginButtonProvider(props) {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  const providerData = { isShown, handleClick };

  return (
    <LoginButtonContext.Provider value={providerData}>
      {props.children}
    </LoginButtonContext.Provider>
  );
}

export const useLoginButtonContext = () => useContext(LoginButtonContext);