import React, { PureComponent } from 'react';
import { observer, inject } from "mobx-react";
import Tabs from "../Tabs";
import Search from "../Search";
import Todo from "../Todo";
import './index.css';

class TodoList extends PureComponent {
    state = {
      activeTab: 'active'
    };

    changeTab = activeTab => this.setState({ activeTab });

    render() {
        const { activeTab } = this.state;
        const { store: { activeTodos, finishedTodos, deleteTodo } } = this.props;
        const todos = activeTab === 'active' ? activeTodos : finishedTodos;
        return (
            <div className="list">
                <Tabs
                    activeTab={activeTab}
                    changeTab={this.changeTab}
                    activeCount={activeTodos.length}
                    finishedCount={finishedTodos.length}
                />
                <Search />
                {todos.length ? todos.map(todo => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        deleteTodo={deleteTodo}
                    />
                )) : (
                    <div className="no-tasks">
                        {`No ${activeTab} tasks.`}
                    </div>
                )}
            </div>
        );
    }
}

export default inject('store')(observer(TodoList));
