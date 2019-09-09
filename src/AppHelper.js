let getTodo = (todos, todoId) => todoId && todos.find(todo => todo.id === todoId);
let getTodoIndex = (todos, todoId) => todoId && todos.findIndex(todo => todo.id === todoId);

export { getTodo, getTodoIndex };
