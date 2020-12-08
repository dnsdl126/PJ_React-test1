import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LandingPage from './component/views/landingPage/LandingPage';
import RegisterPage from './component/views/RegisterPage/RegisterPage';
import LoginPage from './component/views/LoginPage/LoginPage';


function App() {
  return (
    <Router>
      <div>

        <hr />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <LandingPage />
          <Route exact path="/RegisterPage" component={RegisterPage} />
          <RegisterPage />
          <Route exact path="/LoginPage" component={LoginPage} />
          <LoginPage />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
