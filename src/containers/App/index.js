import React from 'react';
import AddTodo from "../../components/AddTodo";
import TodoList from "../../components/TodoList";
import TodoStore from "../../store";
import './index.css';

const store = new TodoStore();

const App = () => (
    <div className="wrapper">
        <div className="content">
            <AddTodo store={store} />
            <TodoList store={store} />
        </div>
    </div>
);

export default App;
