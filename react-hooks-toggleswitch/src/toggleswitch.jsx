import React, { useState, useEffect } from 'react';

function ToggleSwitch() {
  const [isOn, setSwitch] = useState(true);

  function toggle() {
    setSwitch(!isOn);
  }

  if (isOn === true) {
    return (
      <div className="row">
        <div className="switch">
          <input type="checkbox" id="switch" />
          <span className="slider" onClick={toggle}></span>
        </div>
        <label htmlFor="switch">ON</label>
      </div>
    );
  } else if (isOn === false) {
    return (
      <div className="row">
        <div className="switch">
          <input type="checkbox" id="switch" checked="checked" />
          <span className="slider" onClick={toggle}></span>
        </div>
        <label htmlFor="switch">OFF</label>
      </div>
    );
  }
}

export default ToggleSwitch;
