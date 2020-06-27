import React, { PureComponent } from 'react';
import { observer } from "mobx-react";
import classNames from 'classnames';
import TickGrey from '../../assets/images/tick-grey.png';
import Pencil from '../../assets/images/pencil.png';
import Done from '../../assets/images/done.png';
import Trash from '../../assets/images/trash.png';
import './index.css';

class Todo extends PureComponent {
    state = {
        title: '',
        isEdit: false,
        invalid: false
    };

    handleCheck = () => {
        const { todo } = this.props;
        todo.finished = !todo.finished;
    };

    handleEdit = () => {
        const { todo } = this.props;
        const { isEdit } = this.state;
        if (!isEdit) {
            this.setState({ title: todo.title, isEdit: true });
        }
    };

    handleChangeTitle = (event) => {
        const title = event.target.value;
        this.setState({
            title,
            invalid: !title
        });
    };

    handleSave = () => {
        const { todo } = this.props;
        const { invalid, title } = this.state;
        if (invalid) return;
        todo.title = title;
        this.setState({ isEdit: false });
    };

    handleDelete = () => {
        const { todo, deleteTodo } = this.props;
        deleteTodo(todo.id);
    };

    renderIcons = () => {
        const { isEdit } = this.state;
        const { todo } = this.props;
        if (todo.finished) {
            return (
                <div className="icons">
                    <div className="trash" onClick={this.handleDelete}>
                        <img src={Trash} className="trash-icon" alt="trash" />
                    </div>
                </div>
            )
        }
        return (
            <div className="icons">
                {isEdit ? (
                    <div className="done" onClick={this.handleSave}>
                        <img src={Done} className="done-icon" alt="done" />
                    </div>
                ) : (
                    <div className="pencil" onClick={this.handleEdit}>
                        <img src={Pencil} className="pencil-icon" alt="pencil" />
                    </div>
                )}
                <div className="trash" onClick={this.handleDelete}>
                    <img src={Trash} className="trash-icon" alt="trash" />
                </div>
            </div>
        );
    };

    render() {
        const { todo } = this.props;
        const { isEdit, title, invalid } = this.state;
        return (
            <div className="todo-wrapper">
                <div className={classNames('todo', { 'finished': todo.finished })}>
                    <div className="name">
                        <div className="checkbox" onClick={this.handleCheck}>
                            {todo.finished && (
                                <img src={TickGrey} className="tick" alt="tick" />
                            )}
                        </div>
                        {isEdit ? (
                            <input
                                placeholder="Enter task"
                                value={title}
                                onChange={this.handleChangeTitle}
                                className={classNames('input', 'list-input', { 'invalid': invalid })}
                            />
                        ) : (
                            <div>
                                {todo.title}
                            </div>
                        )}
                    </div>
                    {this.renderIcons()}
                </div>
            </div>
        );
    }
}

export default observer(Todo);
