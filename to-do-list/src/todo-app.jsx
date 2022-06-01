import React, { useState, useEffect } from 'react';
import TodoForm from './components/todo-form';
import TodoList from './components/todo-list';

function TodoApp() {
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-sm-8">
          <h2 className="text-center"><strong>Todo List</strong></h2>
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </div>
  )
}

export default TodoApp;
