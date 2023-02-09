//Components
import Header from "./navigation/Header";
import LoginPage from "components/pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import Footer from "./navigation/Footer";

//Accessing context
import { useAuthContext } from "providers/AuthProvider";

//Styles
import '../styles/App.scss';
import AppPage from './AppPage';

export default function App() {
  const { user, isClicked } = useAuthContext();

  return (
    <main>
  
        <Header />

        {!user && !isClicked && (
          <>
            <LandingPage />
          </>
        )}

        {isClicked && !user && <LoginPage />}

        {user && <AppPage />}

        <Footer />
    </main>
  );
}
