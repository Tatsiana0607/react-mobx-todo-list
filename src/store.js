import { decorate, observable } from "mobx";

class TodoStore {
    todos = [
        { id: 1, title: 'test 1', finished: false },
        { id: 2, title: 'test 2', finished: false },
        { id: 3, title: 'test 3', finished: false },
    ];
}

decorate(TodoStore, {
    todos: observable,
});

export default TodoStore;