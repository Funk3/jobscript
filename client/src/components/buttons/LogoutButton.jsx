import React, {useContext} from 'react';
import { useAuthContext } from '../../providers/AuthProvider';

//import { DeleteCookie } from '../../providers/AuthProvider';

export default function LogoutButton() {

  const { logout, handleLoginLogoutClick} = useAuthContext();

  return (
    <button
      onClick={() => {
        logout();
        handleLoginLogoutClick();
      }}
    >
      Logout
    </button>
  );
}
