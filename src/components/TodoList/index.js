import React from 'react';
import Todo from "../Todo";
import './index.css';

const TodoList = ({ todos }) => (
    <div className="list">
        {todos.map(todo => (
            <Todo todo={todo} />
        ))}
    </div>
);

export default TodoList;
