import React, { useState } from 'react';
import List from './List';
import SearchBox from './SearchBox';
import { getTodo, getTodoIndex } from './AppHelper';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState(1);
  const [clearSearch, setClearSearch] = useState(false);

  function addTodo(todo) {
    /**setTimeout to hide html5 form validation popup's */
    setTimeout(_ => {
      todos.push({ value: todo, done: false, id: todoId });
      setTodos(todos);
      setTodoId(todoId + 1);
      setClearSearch(!clearSearch);
    });
  }
  function markDone(todoId) {
    let todo = getTodo(todos, todoId);
    if (todo) {
      todo.done = true;
      setTodos([...todos]);
    }
  }
  function removeTodo(todoId) {
    let todoIndex = getTodoIndex(todos, todoId);
    if (!isNaN(todoIndex) && todoIndex > -1) {
      todos.splice(todoIndex, 1);
      setTodos([...todos]);
    }
  }
  return (
    <div className="App">
      <div className="container">
        <SearchBox clearSearch={clearSearch} onSubmit={addTodo}></SearchBox>
        <div className="ListContainer">
          {todos.map(todo => (
            <List todo={todo} key={todo.id} markDone={markDone} removeTodo={removeTodo}></List>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
