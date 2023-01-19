import s from "./Todo.module.scss";

function Todo({ title, todo, date }) {
    return (
        <div className={s.container}>
            <div className={s.title}>{title}</div>
            <div className={s.todo}>{todo}</div>
            <div className={s.date}>{date}</div>
        </div>
    );
}

export default Todo;