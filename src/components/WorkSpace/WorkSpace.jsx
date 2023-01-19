import React, { useState } from "react";
import TodoCreator from "../TodoCreator";

import s from "./WorkSpace.module.scss";

function WorkSpace() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => {
      return [...prev, todo];
    });
  };

  return (
    <div className={s.workSpace}>
      <TodoCreator addTodo={addTodo} />
    </div>
  );
}

export default WorkSpace;
