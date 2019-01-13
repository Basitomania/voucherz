import React, { Component } from 'react';
// import LandingPage from './components/LandingPage/LandingPage';
// import {BrowserRouter as Router} from "react-router-dom";
// import Route from "react-router-dom/Route";
// import Signin from './components/LoginPage/Signin';
import LoginPage from "./components/LoginPage/LoginPage";
// import {SectionLogin} from "./components/LoginPage/SectionLogin";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Router>
          <div>
            <Route path="" exact component={LandingPage}/>
            <Route path="/login" component = {LoginPage}/>
          </div>
        </Router> */}
        <LoginPage/>
      </div>
    );
  }
}

export default App;
