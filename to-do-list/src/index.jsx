import React from 'react';
import ReactDOMClient from 'react-dom/client';
import TodoApp from './todo-app';

const root = ReactDOMClient.createRoot(document.querySelector('#root'));
root.render(<TodoApp />);
