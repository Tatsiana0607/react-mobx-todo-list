import React from 'react';
import { observer } from "mobx-react";
import Todo from "../Todo";
import './index.css';

const TodoList = observer(({ store: { todos, updateTodo, deleteTodo } }) => (
    <div className="list">
        {todos.map(todo => (
            <Todo
                key={todo.id}
                todo={todo}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
            />
        ))}
    </div>
));

export default TodoList;
