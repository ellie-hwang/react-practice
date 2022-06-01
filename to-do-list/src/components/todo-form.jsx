import React, { useState, useEffect } from 'react';

function TodoForm() {
  return (
    <form className="row">
      <div className="input-group">
        <input autoFocus className="form-control" type="text" value="" placeholder="Add a task..."></input>
        <div className="input-group-append">
          <button className="btn" type="submit">ADD</button>
        </div>
      </div>
    </form>
  )
}

export default TodoForm;
