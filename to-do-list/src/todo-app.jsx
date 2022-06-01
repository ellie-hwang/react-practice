import React, { useState, useEffect } from 'react';

function Todo({ todo, index, completeTodo }) {
  return (
    <div className="todo px-2 py-1 mb-2" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
      {todo.text}
      <div>
        <button className="btn btn-secondary" onClick={() => completeTodo(index)}>Complete</button>
      </div>
    </div>
  );
};

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  }

  return (
    <form className="row mb-2" onSubmit={handleSubmit}>
      <div className="input-group">
        <input autoFocus className="form-control" type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="Add a task..."></input>
        <div className="input-group-append">
          <button className="btn btn-primary" type="submit">ADD</button>
        </div>
      </div>
    </form>
  )
}

function TodoApp() {
  const [todos, setTodos] = useState([
    {
      text: "Feed doggie",
      isCompleted: false
    },
    {
      text: "Buy groceries",
      isCompleted: false
    },
    {
      text: "Do homework",
      isCompleted: false
    }
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-sm-8">
          <div>
            <div className="todo-list p-2">
              <h2 className="text-center"><strong>Todo List</strong></h2>
              <TodoForm addTodo={addTodo} />
              {
                todos.map((todo, index) => (
                  <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoApp;
