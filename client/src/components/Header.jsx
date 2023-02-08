import React from 'react';
import LoginButton from './LoginButton';
//use react-route-dom to link between components?

export default function Header() {
  //props will contain currentUser which is current user object

  return (
    <header className='main-header'>
      <nav className='nav-bar'>
        <a className='nav-logo'>Jobscript logo.</a>
        <LoginButton>Login</LoginButton>
        <a className='nav-link'>Register</a>
        {/*currentUser &&*/}
        Currently logged in as:k@k.com
        <a className='nav-link'>Logout</a>
      </nav>
    </header>
  );
}
