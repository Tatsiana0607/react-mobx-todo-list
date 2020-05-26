import { decorate, observable } from "mobx";

class TodoStore {
    todos = [
        { id: 1, title: 'test 1', finished: false },
        { id: 2, title: 'test 2', finished: false },
        { id: 3, title: 'test 3', finished: false },
    ];

    addTodo = (title) => {
        this.todos.push({
            id: Math.random(),
            title,
            finished: false,
        });
    };

    deleteTodo = (id) => {
        this.todos = this.todos.filter(todo => todo.id !== id);
    };

    updateTodo = (id, title) => {
        this.todos = this.todos.map(todo => todo.id === id ? { ...todo, title } : todo);
    }
}

decorate(TodoStore, {
    todos: observable,
});

export default TodoStore;