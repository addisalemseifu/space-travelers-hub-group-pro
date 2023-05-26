import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';

export default function Rockets() {
  const { rockets } = useSelector((store) => store.rocket);
  console.log(rockets);
  return (
    <div className="rockets">
      {
            rockets.map((rocket) => (
              <Rocket
                reserved={rocket.reserved}
                rocketName={rocket.name}
                description={rocket.description}
                flickrImages={rocket.flickr_images}
                id={rocket.id}
                key={rocket.id}
              />
            ))
        }
    </div>
  );
}
