import React from 'react';
import { observer } from "mobx-react";
import Todo from "../Todo";
import './index.css';

const TodoList = observer(({ todos }) => (
    <div className="list">
        {todos.map(todo => (
            <Todo todo={todo} />
        ))}
    </div>
));

export default TodoList;
