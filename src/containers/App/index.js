import React from 'react';
import AddTodo from "../../components/AddTodo";
import TodoList from "../../components/TodoList";
import './index.css';

const App = () => (
    <div className="wrapper">
        <div className="content">
            <AddTodo />
            <TodoList />
        </div>
    </div>
);

export default App;
