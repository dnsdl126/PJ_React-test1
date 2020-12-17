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
import Auth from './hoc/auth'
import UploadProductPage from './component/views/UploadProductPage/UploadProductPage'

function App() {
  return (
    <Router>
      <div>

        <hr />
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null, true)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/product/upload" component={Auth(UploadProductPage, true)} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
