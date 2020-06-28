import { decorate, observable, computed } from "mobx";

class TodoStore {
    todos = [
        { id: 1, title: 'Drink a cup of coffee', finished: false },
        { id: 2, title: 'Learn MobX', finished: false },
        { id: 3, title: 'Take some rest', finished: false },
    ];

    searchValue = '';

    deletedTodo = null;

    secondsRemainingToRestore = 0;

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

    hideUndoButton = () => {
        const undoButton = document.getElementById('undo-button');
        if (undoButton) undoButton.classList.add("hide-me");
        setTimeout(() => {
            this.deletedTodo = null;
            this.secondsRemainingToRestore = 0;
        }, 300);
    };

    archiveTodo = (todo, index) => {
        this.deletedTodo = { todo, index };
        this.secondsRemainingToRestore = 5;
        const interval = setInterval(() => {
            this.secondsRemainingToRestore = this.secondsRemainingToRestore - 1;
            if (this.secondsRemainingToRestore <= 0) {
                clearInterval(interval);
                this.hideUndoButton();
            }
        }, 1000);
    };

    restoreTodo = () => {
        const { todo, index } = this.deletedTodo;
        this.todos.splice(index, 0, todo);
        this.hideUndoButton();
    };

    updateTodo = (id, title) => {
        this.todos = this.todos.map(todo => todo.id === id ? { ...todo, title } : todo);
    }
}

decorate(TodoStore, {
    todos: observable,
    searchValue: observable,
    deletedTodo: observable,
    secondsRemainingToRestore: observable,
    finishedTodos: computed,
    activeTodos: computed,
});

export default TodoStore;