import React from "react";
import { Link } from "react-router-dom";

import TodoList from "./Todo/TodoList";
import ConditionalOutput from "./ConditionalOutput";
import Classes from "./Classes";
import Styles from "./Styles";
import ReduxExamples from "./ReduxExamples/components";

const Practice = () => {
  return (
    <>
      <h1>Practice</h1>
      <Link to="/a7/hello">
        Hello
      </Link> |
      <Link to="/a7/twitter/home">
        Build
      </Link>

      <ReduxExamples/>

      <TodoList />
      <ConditionalOutput />
      <Styles />
      <Classes />
    </>
  );
};

export default Practice;
