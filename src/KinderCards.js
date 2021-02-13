import React, { useState } from 'react';
import KinderCard from 'react-tinder-card';
import './KinderCards.css';

function KinderCards() {
  const [people, setPeople] = useState([
    {
      name: 'Candy',
      url:
        'https://www.rd.com/wp-content/uploads/2019/01/shutterstock_673465372.jpg',
    },
    {
      name: 'Cookie',
      url:
        'https://topdogtips.com/wp-content/uploads/2014/12/Top-10-Cute-Dog-Breeds-Who-Wins-1.jpg',
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log('removing + ', nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + ' left the screen');
  };

  return (
    <div className="kinderCards">
      <div className="kinderCards__cardContainer">
        {people.map((person) => (
          <KinderCard
            className="swipe"
            key={person.name}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </KinderCard>
        ))}
      </div>
    </div>
  );
}

export default KinderCards;
