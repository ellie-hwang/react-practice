import React from 'react';
import ReactDOMClient from 'react-dom/client';
import ToggleSwitch from './toggleswitch';

const root = ReactDOMClient.createRoot(document.querySelector('#root'));
root.render(<ToggleSwitch />);
