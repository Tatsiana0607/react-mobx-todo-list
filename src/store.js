import { decorate, observable, computed } from "mobx";

class TodoStore {
    todos = [
        { id: 1, title: 'Drink a cup of coffee', finished: false },
        { id: 2, title: 'Learn MobX', finished: false },
        { id: 3, title: 'Take some rest', finished: false },
    ];

    searchValue = '';

    get finishedTodos() {
        return this.todos.filter(todo => todo.finished && todo.title.includes(this.searchValue));
    }

    get activeTodos() {
        return this.todos.filter(todo => !todo.finished && todo.title.includes(this.searchValue));
    }

    addTodo = (title) => {
        this.todos.unshift({
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
    searchValue: observable,
    finishedTodos: computed,
    activeTodos: computed,
});

export default TodoStore;