import React, {component} from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Members from "./pages/Members";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Nav/Navbar";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Members} />
          <Route exact path="/members" component={Members} />
          <Route exact path="/members/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
     
      </div>
    </Router>
  );
}

export default App;
