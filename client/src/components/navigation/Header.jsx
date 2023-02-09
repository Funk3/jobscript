import React from "react";
import { useAuthContext } from "providers/AuthProvider";
import LogoutButton from "components/buttons/LogoutButton";
import LoginButton from "components/buttons/LoginButton";

export default function Header() {
  const { user } = useAuthContext();

  return (
    <header className="main-header">
      <nav className="nav-bar">
        <img className="logo" src="../../JobScript.png" />
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
              <p className="crr-user">Currently logged in as:{user.email}</p>
              <LogoutButton />
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
