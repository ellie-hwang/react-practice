import React, { useState, useEffect } from 'react';

function TodoList() {
  return (
    <>
      <form>
        <input id="todo-item" type="text" value=""></input>
        <button type="button">ADD</button>
      </form>
    </>
  )
}

export default TodoList;
