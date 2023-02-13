import React from "react";
import { useAuthContext } from "providers/AuthProvider";
import LogoutButton from "components/buttons/LogoutButton";
import LoginButton from "components/buttons/LoginButton";

export default function Header() {
  const { user } = useAuthContext();

  return (
    <header className="main-header">
      <nav className="nav-bar">
        <img className="logo" src="../../logo.png" />
        {!user && (
          <>
            <div className="nav-rhs">
              <button className="log-btn"> Register </button>
              <LoginButton />
            </div>
          </>
        )}

        {user && (
          <>
            <div className="nav-rhs">
            <i className="fa-solid fa-user fa-lg"></i>
            <p className="crr-user">Logged in as : {user.email}</p>
              <LogoutButton />
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
