import React, { useState, useEffect } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Feed doggie",
      completed: true
    },
    {
      id: 2,
      text: "Buy groceries",
      complete: false
    },
    {
      id:3,
      text: "Do homework",
      complete: true
    }
  ]);

  const todoList = tasks.map((task) => {
    return (
      <li key={task.id.toString()} style={{ textDecoration: task.completed ? "line-through" : "" }}>
        {task.text}
      </li>
    )
  })

  return (
    <ul>
      {todoList}
    </ul>
  )
}

export default TodoList;
