import React, { useState } from 'react';

const topics = [
  {
    id: 1,
    topic: 'Tastea',
    details: 'They have solid fruit teas and their boba is green. Their milk teas are not very tasty.Popcorn chicken and fries are great, but the portion size got smaller.'
  },
  {
    id: 2,
    topic: 'Happy Lemon',
    details: 'Don\'t get their boba. They specialize in cheese foam drinks. They also have bubble waffles which are pretty good.Sometimes they have crepecakes too.'
  },
  {
    id: 3,
    topic: '7 Leaves',
    details: 'Boba is a hit or a miss.Sometimes it\'s too squishy and overcooked. Their taro milk tea is the best, but it could do with less sugar. Their menu has a good variety of teas.'
  }
];

function Accordion() {
  const [topicId, setTopicId] = useState(null);
  const [isOpen, setOpen] = useState(false);

  function handleClick(event) {
    if (Number(event.target.getAttribute('data-topic-id')) === topicId) {
      setTopicId(null);
      setOpen(false);
    } else if (Number(event.target.getAttribute('data-topic-id')) !== topicId && isOpen === true) {
      setTopicId(Number(event.target.getAttribute('data-topic-id')));
      setOpen(true);
    } else if (Number(event.target.getAttribute('data-topic-id')) !== topicId && isOpen === false) {
      setTopicId(Number(event.target.getAttribute('data-topic-id')));
      setOpen(true);
    }
  }

  const displayContent = isOpen ? '': 'display-none';

  return (
    <div className="tab-container">
      {
        topics.map((topic) => {
          if (Number(topicId) === Number(topic.id)) {
            return (
              <div className="tab" key={topic.id.toString()} >
                <h3 className="tab-title" onClick={handleClick} data-topic-id={topic.id}>{topic.topic}</h3>
                <p className={`tab-content ${displayContent}`}>{topic.details}</p>
              </div>
            )
          }
          return (
            <div className="tab" key={topic.id.toString()} >
              <h3 className="tab-title" onClick={handleClick} data-topic-id={topic.id}>{topic.topic}</h3>
              <p className="tab-content display-none">{topic.details}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default Accordion;
