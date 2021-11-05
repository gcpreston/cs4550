import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';

import HelloWorld from "./components/a6/HelloWorld";
import A6Practice from "./components/a6/Practice";
import A6Build from "./components/a6/Build";
import A7Practice from "./components/a7/Practice";
import A7Build from "./components/a7/Build";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Route path="/a6/hello" exact={true}>
          <HelloWorld />
        </Route>
        <Route path={["/", "/a6", "/a6/practice"]} exact={true}>
          <A6Practice />
        </Route>
        <Route path="/a6/build" exact={true}>
          <A6Build />
        </Route>
        <Route path={["/", "/a7", "/a7/practice"]} exact={true}>
          <A7Practice />
        </Route>
        <Route path="/a7/twitter">
          <A7Build />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
