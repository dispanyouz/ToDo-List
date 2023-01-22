import React, { useState } from "react";
import TodoCreator from "../TodoCreator";
import Todo from "../Todo";

import s from "./WorkSpace.module.scss";

function WorkSpace() {
  const localData = JSON.parse(localStorage.getItem("Todos") || "[]");
  const [todos, setTodos] = useState(localData);

  const addTodo = (todo) => {
    setTodos((prev) => {
      localStorage.setItem("Todos", JSON.stringify([...prev, todo]));
      return [...prev, todo];
    });
  };

  return (
    <div className={s.workSpace}>
      <div className={s.todoCreator}>
        <TodoCreator addTodo={addTodo} />
      </div>
      <div className={s.grid}>
        {
          todos.map((elem, index) => {
            return <Todo title={elem.title} todo={elem.todo} date={elem.date} key={index} />
          })
        }
      </div>
    </div>
  );
}

export default WorkSpace;
