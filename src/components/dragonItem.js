import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { makeReservation, cancelReservation } from '../redux/dragons/dragonSlice';

const DragonItem = ({ dragon }) => {
  const dispatch = useDispatch();

  return (
    <div className="dragoncont">
      <div className="dragonsubcont">
        <img
          src={dragon.image}
          alt={dragon.name}
          className="img"
        />
        <div className="textcont">
          <div className="header">
            <h2>{dragon.name}</h2>
          </div>
          <p>
            {dragon.reserved && <span className="reservation">Reserved</span>}
            {dragon.description}
          </p>
          <div className="btncont">
            {dragon.reserved ? (
              <button className="cancel-button" type="submit" onClick={() => { dispatch(cancelReservation(dragon.id)); }}>Cancel Reservation</button>
            ) : (
              <button
                type="submit"
                className="reserve-button"
                onClick={() => {
                  dispatch(makeReservation(dragon.id));
                }}
              >
                Reserve dragon

              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

DragonItem.propTypes = {
  dragon: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default DragonItem;
