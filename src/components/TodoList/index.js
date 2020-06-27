import React, { PureComponent } from 'react';
import * as CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { observer, inject } from "mobx-react";
import classNames from "classnames";
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
            <div className="list-container">
                <Tabs
                    activeTab={activeTab}
                    changeTab={this.changeTab}
                    activeCount={activeTodos.length}
                    finishedCount={finishedTodos.length}
                />
                <Search />
                <CSSTransitionGroup
                    component="div"
                    className="list"
                    transitionName="todo"
                    transitionEnterTimeout={700}
                    transitionLeaveTimeout={500}
                >
                    {todos.map(todo => (
                        <Todo
                            key={todo.id}
                            todo={todo}
                            deleteTodo={deleteTodo}
                        />
                    ))}
                    <div className={classNames('no-tasks', { 'show': !todos.length })}>
                        {`No ${activeTab} tasks.`}
                    </div>
                </CSSTransitionGroup>
            </div>
        );
    }
}

export default inject('store')(observer(TodoList));
