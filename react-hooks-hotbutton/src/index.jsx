import React from 'react';
import ReactDOMClient from 'react-dom/client';
import HotButton from './hot-button';

const root = ReactDOMClient.createRoot(document.querySelector('#root'));
root.render(<HotButton />);
