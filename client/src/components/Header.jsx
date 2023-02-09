import React from 'react';
//use react-route-dom to link between components?

export default function Header() {
  //props will contain currentUser which is current user object

  return (
    <header className='main-header'>
      <nav className='nav-bar'>
        <a className='nav-logo'>Jobscript logo.</a>
        Currently logged in as:k@k.com
        {/*currentUser &&*/}
        <a className='nav-link'>Logout</a>
      </nav>
    </header>
  );
}