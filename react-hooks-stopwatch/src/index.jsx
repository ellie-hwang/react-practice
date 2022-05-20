import React from 'react';
import ReactDOMClient from 'react-dom/client';
import StopWatch from './stopwatch';

const root = ReactDOMClient.createRoot(document.querySelector('#root'));
root.render(<StopWatch />);
