import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';

export default function Rockets() {
  const { rockets } = useSelector((store) => store.rocket);
  return (
    <div className="rockets">
      {
            rockets.map((rocket) => (
              <Rocket
                key={rocket.id}
                rocket={rocket}
              />
            ))
        }
    </div>
  );
}
