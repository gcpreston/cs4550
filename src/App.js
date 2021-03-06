import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';

import HelloWorld from "./components/a6/HelloWorld";
import A6Practice from "./components/a6/Practice";
import A6Build from "./components/a6/Build";
import A7Practice from "./components/a7/Practice";
import A7Build from "./components/a7/Build";
import A8Practice from "./components/a8/Practice";
import A8Build from "./components/a8/Build";
import A9 from "./components/a9";

import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Link to="/a6/practice">A6</Link> |
        <Link to="/a7/practice">A7</Link> |
        <Link to="/a8/practice">A8</Link> |
        <Link to="/a9/practice">A9</Link>

        <Route path="/a6/hello" exact={true}>
          <HelloWorld />
        </Route>
        <Route path={["/a6", "/a6/practice"]} exact={true}>
          <A6Practice />
        </Route>
        <Route path="/a6/build" exact={true}>
          <A6Build />
        </Route>
        <Route path={["/a7", "/a7/practice"]} exact={true}>
          <A7Practice />
        </Route>
        <Route path="/a7/twitter">
          <A7Build />
        </Route>
        <Route path={["/a8", "/a8/practice"]} exact={true}>
          <A8Practice />
        </Route>
        <Route path="/a8/twitter">
          <A8Build />
        </Route>
        <Route path={["/", "/a9"]}>
          <A9 />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
