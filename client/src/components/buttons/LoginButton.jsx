import LoginPage from 'components/pages/LoginPage';
import React, {useState} from 'react';
import { useAuthContext } from 'providers/AuthProvider';

export default function LoginButton() {

  const {handleLoginLogoutClick} = useAuthContext();

  return (
    <>
    <button className='log-btn' onClick={handleLoginLogoutClick}> Login </button>
    </>
  );
}