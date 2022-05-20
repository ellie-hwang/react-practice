import React, { useState, useEffect } from 'react';

function StopWatch() {
  const [isTicking, setTicking] = useState(false);
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  useEffect(() => {
    let intId = null;
    if (isTicking === true) {
      intId = setInterval(() => {
        setSecondsElapsed(secondsElapsed + 1)
      }, 1000);
    } else if (isTicking === false) {
      clearInterval(intId);
    }
    return () => clearInterval(intId);
  }, [isTicking, secondsElapsed]);

  function toggleTicking() {
    setTicking(!isTicking);
  }

  function reset() {
    if (isTicking === false) {
      setSecondsElapsed(0);
    }
  }

  const icon = isTicking ? 'fas fa-pause' : 'fas fa-play';
  return (
    <div className="row">
      <div id="watchface" onClick={reset}>
        <p>{secondsElapsed}</p>
      </div>
      <div id="icon-container">
        <i onClick={toggleTicking} className={icon} />
      </div>
    </div>
  );

}

export default StopWatch;
