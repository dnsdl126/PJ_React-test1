import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LandingPage from './component/views/landingPage/LandingPage';
import RegisterPage from './component/views/RegisterPage/RegisterPage';
import LoginPage from './component/views/LoginPage/LoginPage'


function App() {
  return (
    <Router>
      <div>

        <hr />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" component={LoginPage} />

        </Switch>
      </div>
    </Router>
  );
}


export default App;
