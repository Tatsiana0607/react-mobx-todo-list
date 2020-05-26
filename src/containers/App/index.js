import React from 'react';
import TodoList from "../../components/TodoList";
import './index.css';

const App = ({ store }) => (
    <div className="container">
        <TodoList todos={store.todos} />
    </div>
);

export default App;
