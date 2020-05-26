import React from 'react';
import AddTodo from "../../components/AddTodo";
import TodoList from "../../components/TodoList";
import './index.css';

const App = ({ store }) => (
    <div className="wrapper">
        <div className="content">
            <AddTodo addTodo={store.addTodo} />
            <TodoList todos={store.todos} />
        </div>
    </div>
);

export default App;
