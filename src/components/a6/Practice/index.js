import React from "react";
import { Link } from "react-router-dom";

import TodoList from "./Todo/TodoList";
import ConditionalOutput from "./ConditionalOutput";
import Classes from "./Classes";
import Styles from "./Styles";

const Practice = () => {
  return (
    <>
      <h1>Practice</h1>
      <Link to="/a6/hello">
        Hello
      </Link> |
      <Link to="/a6/build">
        Build
      </Link>

      <TodoList />
      <ConditionalOutput />
      <Styles />
      <Classes />
    </>
  );
};

export default Practice;
