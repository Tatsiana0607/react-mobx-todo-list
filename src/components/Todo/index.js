import React from 'react';
import { observer } from "mobx-react";
import classNames from 'classnames';
import TickGrey from '../../assets/images/tick-grey.png';
import './index.css';

const Todo = observer(({ todo }) => {
    const handleCheck = () => {
        todo.finished = !todo.finished;
    };
    return (
        <div className={classNames('todo', { 'finished': todo.finished })}>
            <div className="checkbox" onClick={handleCheck}>
                {todo.finished && (
                    <img src={TickGrey} className="tick" alt="tick" />
                )}
            </div>
            <div>
                {todo.title}
            </div>
        </div>
    );
});

export default Todo;
