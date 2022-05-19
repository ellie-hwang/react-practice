import React, { useState } from 'react';

function HotButton() {
  const [count, setCount] = useState(0);

  if (count < 4) {
    const className = 'dark-blue';
    return (
      <button onClick={() => setCount(count + 1)} className={className}>Hot Button</button>
    );
  } else if (count < 7) {
    const className = 'blue';
    return (
      <button onClick={() => setCount(count + 1) } className={className}>Hot Button</button>
    );
  } else if (count < 10) {
    const className = 'red';
    return (
      <button onClick={() => setCount(count + 1) } className={className}>Hot Button</button>
    );
  } else if (count < 13) {
    const className = 'orange';
    return (
      <button onClick={() => setCount(count + 1) } className={className}>Hot Button</button>
    );
  } else if (count < 16) {
    const className = 'yellow';
    return (
      <button onClick={() => setCount(count + 1) } className={className}>Hot Button</button>
    );
  } else {
    const className = 'white';
    return (
      <button onClick={() => setCount(count + 1) } className={className}>Hot Button</button>
    );
  }
}

export default HotButton;
