//Components
import Header from "./navigation/Header";
import LoginPage from "components/pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import Footer from "./navigation/Footer";

//Accessing context
import { useAuthContext } from "providers/AuthProvider";
import { useLoginButtonContext } from "providers/LoginButtonProvider";
//Styles
import "../styles/App.css";
import AppPage from "./AppPage";

export default function App() {
  const { user } = useAuthContext();
  const { isShown} = useLoginButtonContext();

  return (
    <main>
  
        <Header />

        {!user && !isShown && (
          <>
            <LandingPage />
          </>
        )}

        {isShown && <LoginPage />}

        {user && isShown && <AppPage />}

        <Footer />
    </main>
  );
}
