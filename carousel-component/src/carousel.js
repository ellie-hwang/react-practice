import React, { useState } from 'react';

function Carousel(props) {
  const [activeImgId, setImgId] = useState(1);
  const characters = props.characters;

  function handleClick(event) {
    if ((activeImgId === characters.length) && (event.target.getAttribute('class') === 'fa-solid fa-angle-right')) {
      setImgId(1);
    } else if (event.target.getAttribute('class') === 'fa-solid fa-angle-right') {
      setImgId(activeImgId + 1);
    } else if ((activeImgId === 1) && (event.target.getAttribute('class') === 'fa-solid fa-angle-left')) {
      setImgId(5);
    } else if (event.target.getAttribute('class') === 'fa-solid fa-angle-left') {
      setImgId(activeImgId - 1);
    } else if (event.target.getAttribute('class') === 'fa-solid fa-circle mx-1') {
      setImgId(activeImgId);
    } else if (event.target.getAttribute('class') === 'fa-regular fa-circle mx-1') {
      const imgId = Number(event.target.getAttribute('data-id'));
      setImgId(imgId);
    }
  }

  const active = activeImgId ? '' : 'display-none';
  const imgList = characters.map(character => {
    if (activeImgId === character.id) {
      return (
        <CharacterImg character={character} active={active} key={character.id.toString()} />
      );
    } else {
      return (
        <CharacterImg character={character} active='display-none' key={character.id.toString()} />
      );
    }
  });
  const circles = characters.map(character => {
    if (activeImgId === character.id) {
      return (
        <i className="fa-solid fa-circle mx-1" key={character.id.toString()} data-id={character.id} onClick={handleClick} />
      );
    } else {
      return (
        <i className="fa-regular fa-circle mx-1" key={character.id.toString()} data-id={character.id} onClick={handleClick} />
      );
    }
  });

  return (
    <div className="container">
      <div className="row d-flex justify-content-center mt-5">
        <div className="text-center">
          <i className="fa-solid fa-angle-left" onClick={handleClick}/>
          <div className="img-container mx-3 mb-3">
            {imgList}
          </div>
          <i className="fa-solid fa-angle-right" onClick={handleClick}/>
        </div>
        <div className="cicles text-center">
          {circles}
        </div>
      </div>
    </div>
  );
}

function CharacterImg(props) {
  const { id, name, url } = props.character;

  return (
    <img src={url} alt={name} className={`${props.active} img-fluid character-img`} data-id={id} />
  );
}

export default Carousel;
