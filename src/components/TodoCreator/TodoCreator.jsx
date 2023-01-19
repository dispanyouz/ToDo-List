import { useState } from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import s from "./TodoCreator.module.scss";
import { useSnackbar } from 'notistack';

function TodoCreator({ addTodo }) {
  const { enqueueSnackbar } = useSnackbar();
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const todoChangeHandler = (e) => {
    setTodo(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!title) {
      enqueueSnackbar("Title is empty", { variant: "error" });
      return;
    }

    if (!todo) {
      enqueueSnackbar("Note is empty", { variant: "error" });
      return;
    }

    addTodo({
      title,
      todo,
      date: new Date().toLocaleDateString()
    });
    enqueueSnackbar("Todo has been added", { variant: "success" });

    setTitle("");
    setTodo("");
  };

  return (
    <form className={s.form} onSubmit={submitHandler}>
      <div className={s.todoCreator}>
        <TextField value={title} name="title" id="standard-basic" label="Заголовок" variant="standard" onChange={titleChangeHandler} />
        <TextField value={todo} name="todo" id="outlined-basic" label="Ваша заметка" variant="outlined" onChange={todoChangeHandler} />
        <div className={s.button_centered}>
          <Button type="submit" className={s.save_button} variant="contained">Сохранить</Button>
        </div>
      </div>
    </form>
  );
}

export default TodoCreator;
