import React from 'react';
import { Route } from "react-router-dom";

import ExploreScreen from './ExploreScreen/ExploreScreen';

const Build = () => {
  return (
    <div>
      <Route path={["/", "/a7/twitter/home"]}
        exact={true} /* component={HomeScreen} */ />
      <Route path="/a7/twitter/explore"
        exact={true} component={ExploreScreen} />
    </div>
  );
};
export default Build;
