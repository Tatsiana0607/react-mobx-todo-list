import React from 'react';
import { observer } from "mobx-react";
import classNames from 'classnames';
import TickGrey from '../../assets/images/tick-grey.png';
import Pencil from '../../assets/images/pencil.png';
import Trash from '../../assets/images/trash.png';
import './index.css';

const Todo = observer(({ todo }) => {

    const handleCheck = () => {
        todo.finished = !todo.finished;
    };

    return (
        <div className={classNames('todo', { 'finished': todo.finished })}>
            <div className="name">
                <div className="checkbox" onClick={handleCheck}>
                    {todo.finished && (
                        <img src={TickGrey} className="tick" alt="tick" />
                    )}
                </div>
                <div>
                    {todo.title}
                </div>
            </div>
            <div className="icons">
                <div className="pencil">
                    <img src={Pencil} className="pencil-icon" alt="pencil" />
                </div>
                <div className="trash">
                    <img src={Trash} className="trash-icon" alt="trash" />
                </div>
            </div>
        </div>
    );
});

export default Todo;
