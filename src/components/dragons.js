import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDragons } from '../store/dragon/dragonSlice';
import DragonItem from './dragonItem';

function Dragon() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDragons());
  }, [dispatch]);

  const { dragons } = useSelector((store) => store.dragons);

  return (
    <div className="dragons">
      {dragons.map((dragon) => (
        <DragonItem
          image={dragon.flickr_images}
          key={dragon.id}
          name={dragon.name}
          description={dragon.description}
          id={dragon.id}
          type={dragon.type}
          reserved={dragon.reserved}
        />
      ))}
    </div>
  );
}
export default Dragon;
