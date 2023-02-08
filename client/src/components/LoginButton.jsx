import React from 'react';
import { Cookie } from '../providers/AuthProvider';
import { login } from '../__helpers__/routes/loginroute';

export default function LoginButton(props) {
  return (
    <button
      onClick={() => {
        login();
        Cookie();
      }}
    >
      {props.children}
    </button>
  );
}
