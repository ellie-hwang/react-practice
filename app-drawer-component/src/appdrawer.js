import React, { useState } from 'react';

function AppDrawer() {
  const [visibility, setVisibility] = useState(false);

  function handleClick(event) {
    if (event.target.matches('#menu-icon')) {
      setVisibility(true);
    } else if (event.target.matches('.menu-item') || event.target.matches('.black-bg')) {
      setVisibility(false);
    }
  }

  const bgVisible = visibility ? 'bg-visible' : '';
  const menuVisible = visibility ? 'menu-visible' : '';

  return (
    <div className="row">
      <div className="icon-container">
        <i id="menu-icon" className="fas fa-bars" onClick={handleClick}></i>
      </div>
      <div id="black-bg" className={`black-bg ${bgVisible}`} onClick={handleClick}>
      </div>
      <div className={`menu ${menuVisible}`} onClick={handleClick}>
        <p className="menu-header">Explore Bikini Bottom</p>
        <a className="menu-item" href="#">Spongebob&apos;s House</a>
        <a className="menu-item" href="#">Patrick&apos;s Rock</a>
        <a className="menu-item" href="#">Squidward&apos;s Place</a>
        <a className="menu-item" href="#">Krusty Krab</a>
        <a className="menu-item" href="#">Glove World</a>
      </div>
    </div>
  );
}

export default AppDrawer;
