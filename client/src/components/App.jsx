//Accessing context
import LoginPage from 'pages/LoginPage';
import { useAuthContext } from '../providers/AuthProvider';

//Styles
import '../styles/App.scss';
import AppPage from './AppPage';

export default function App() {
  const { user } = useAuthContext();

  //determine if coverLetterTextExists, if it does, render the section. If not, hide the section

  //If we get user auth done:
  //Helper function here to find out if user exists eg currentUser takes in req.session and returns user object
  //if currentUser, render LandingPage, else render dashboard
  //pass currentUser into <Header/> component to render login/logout
  return (
    <main>
      {!user &&
        <LoginPage />
      }
      {user != null && (
        <AppPage />
      )}
    </main>
  );
}
