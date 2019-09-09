import React from 'react';

function List({ todo, markDone, removeTodo }) {
  return (
    <div className="list">
      <span className={todo.done ? 'todo-done' : 'todo'}>{todo.value}</span>
      <div className="List-actions">
        <button onClick={e => markDone(todo.id)} disabled={todo.done}>
          Done
        </button>
        <button onClick={e => removeTodo(todo.id)}>Remove</button>
      </div>
    </div>
  );
}

export default List;
