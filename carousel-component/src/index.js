import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const characters = [
  {
    id: 1,
    name: 'Webber',
    url: 'images/webber.jpg'
  },
  {
    id: 2,
    name: 'Wilson',
    url: 'images/wilson.jpg'
  },
  {
    id: 3,
    name: 'Willow',
    url: 'images/willow.jpg'
  },
  {
    id: 4,
    name: 'Wendy',
    url: 'images/wendy.jpg'
  },
  {
    id: 5,
    name: 'Woody',
    url: 'images/woody.jpg'
  }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Carousel characters={characters} />
  </React.StrictMode>
);
