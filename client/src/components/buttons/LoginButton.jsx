import LoginPage from 'components/pages/LoginPage';
import React, {useState} from 'react';
import { useLoginButtonContext } from 'providers/LoginButtonProvider';

export default function LoginButton() {

  const {handleClick} = useLoginButtonContext();

  return (
    <>
    <button onClick={handleClick}> Login </button>
    </>
  );
}