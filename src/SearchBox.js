import React, { useState, useEffect } from 'react';

function SearchBox({ onSubmit, clearSearch }) {
  const [inputVal, setInputVal] = useState('');
  useEffect(
    _ => {
      setInputVal('');
      return () => {};
    },
    [clearSearch],
  );
  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        type="text"
        required
        className="Todo-input"
        value={inputVal}
        onChange={e => setInputVal(e.target.value)}
        onKeyPress={({ keyCode, which, target }) => (keyCode || which) === 13 && onSubmit(target.value)}
      />
    </form>
  );
}

export default SearchBox;
