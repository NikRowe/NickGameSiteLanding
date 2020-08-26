import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./Pages/Home"
import Page2 from "./Pages/Page2"

// R-SUITE //
// import 'rsuite/lib/styles/themes/dark/index.less';
/** import default css */
// import 'rsuite/dist/styles/rsuite-default.css';
/** import dark css */
import 'rsuite/dist/styles/rsuite-dark.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/page2" component={Page2} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
