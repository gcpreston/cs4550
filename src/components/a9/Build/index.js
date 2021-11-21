import React from 'react';
import { Route } from "react-router-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import HomeScreen from './HomeScreen';
import ExploreScreen from './ExploreScreen/ExploreScreen';
import who from "../../../reducers/who";
import tweets from "../../../reducers/tweets";

const reducer = combineReducers({tweets, who})
const store = createStore(reducer);

const Build = () => {
  return (
    <Provider store={store}>
      <div>
        <Route path={["/", "/a9/twitter/home"]} exact={true} component={HomeScreen} />
        <Route path="/a9/twitter/explore" exact={true} component={ExploreScreen} />
      </div>
    </Provider>
  );
};
export default Build;
