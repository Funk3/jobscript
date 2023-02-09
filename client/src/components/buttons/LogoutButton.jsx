import React, {useContext} from 'react';
import { authContext } from '../../providers/AuthProvider';

//import { DeleteCookie } from '../../providers/AuthProvider';

export default function LogoutButton() {

  const { logout } = useContext(authContext);

  return (
    <button
      onClick={() => {
        logout();
      }}
    >
      Logout
    </button>
  );
}
