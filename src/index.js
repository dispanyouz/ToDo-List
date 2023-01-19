import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// HW:
// https://www.figma.com/file/2l10UKQP5mut2ujy4QkeR8/Untitled?node-id=0%3A1&t=bwfq5AXtQjpIAcGD-0
// Необходимо по дизайну реализовать компоненту TodoCreator
// Заголовок, Ваша заметка и кнопка Сохранить
// Также в нее необходимо добавить логику используя useState()
// На кнопку Сохранить в консоль должен выводиться объект {title: "", todo: ""}, поля которого совпадают с контентом в текстовых полях
// Для реализации кнопок и инпутов, использовать библиотеку MUI