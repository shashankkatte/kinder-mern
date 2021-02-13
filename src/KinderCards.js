import React, { useState, useEffect } from 'react';
import KinderCard from 'react-tinder-card';
import './KinderCards.css';
import axios from './axios';

function KinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get('/kinder/cards');

      setPeople(req.data);
    }
    fetchData();
  }, []);

  console.log(people);

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
              style={{ backgroundImage: `url(${person.imageUrl})` }}
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
