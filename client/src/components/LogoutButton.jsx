import React from 'react';
import { DeleteCookie } from '../providers/AuthProvider';

export default function LoginButton(props) {
  return (
    <button
      onClick={() => {
        DeleteCookie();
      }}
    >
      {props.children}
    </button>
  );
}
