import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDragons } from '../redux/dragons/dragonSlice';
import DragonItem from './dragonItem';

function Dragon() {
  const dispatch = useDispatch();
  const { dragons } = useSelector((store) => store.dragons);
  const { isLoading } = useSelector((state) => state.dragons);
  useEffect(() => {
    if (isLoading === false) dispatch(getDragons());
  }, [dispatch, isLoading]);

  return (
    <div className="dragons">
      {isLoading
       && dragons.map((dragon) => (
         <DragonItem
           key={dragon.id}
           dragon={dragon}
         />
       ))}
    </div>
  );
}
export default Dragon;
