import React, { PureComponent } from 'react';
import classNames from 'classnames';
import './index.css';

class AddTodo extends PureComponent {
    state = {
        title: '',
        invalid: false
    };

    handleChangeTitle = (event) => {
        const title = event.target.value;
        this.setState({
            title,
            invalid: !title
        });
    };

    handleAddTodo = () => {
        const { title } = this.state;
        if (!title) {
            this.setState({ invalid: true });
            return;
        }
        const { addTodo } = this.props;
        addTodo(title);
        this.setState({ title: '' });
    };

    render() {
        const { title, invalid } = this.state;
        return (
            <div className="add-todo">
                <div className="title">Create your TODO list</div>
                <div className="form">
                    <input
                        placeholder="Enter task"
                        value={title}
                        onChange={this.handleChangeTitle}
                        className={classNames('input', { 'invalid': invalid })}
                    />
                    <button
                        onClick={this.handleAddTodo}
                        className="button"
                    >
                        Add
                    </button>
                </div>
            </div>
        );
    }
}

export default AddTodo;
