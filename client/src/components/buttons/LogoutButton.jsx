import React from 'react';
import { useAuthContext } from '../../providers/AuthProvider';

export default function LogoutButton() {

  const { logout, handleLoginLogoutClick} = useAuthContext();

  return (
    <button
      className='log-btn'
      onClick={() => {
        logout();
        handleLoginLogoutClick();
      }}
    >
      Logout
    </button>
  );
}
