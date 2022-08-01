import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AnotherPage from "./Pages/AnotherPage";
import MyPage from "./Pages/MyPage";
import React from "react";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MyPage}/>
        <Route exact path="/another-page" component={AnotherPage} />
      </Switch>
    </Router>

  );
}

export default App;
