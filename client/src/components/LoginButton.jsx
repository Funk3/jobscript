import React from 'react';
import login from '../__helpers__/loginroute';

export default function LoginButton(props) {
  return <button onClick={login}>{props.children}</button>;
}
