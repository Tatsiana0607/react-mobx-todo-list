import React from 'react';
import './index.css';

const Todo = ({ todo }) => (
    <div className="todo">
        {todo.title}
    </div>
);

export default Todo;
