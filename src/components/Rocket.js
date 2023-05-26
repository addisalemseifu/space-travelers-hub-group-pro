import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserve, cancelReserve } from '../redux/rockets/rocketsSlice';

export default function Rocket({ rocket }) {
  const dispatch = useDispatch();
  function reserveHandler(id) {
    dispatch(reserve(id));
  }

  function cancelReserveHandler(id) {
    dispatch(cancelReserve(id));
  }
  return (
    <div className="rocket-container">
      <img src={rocket.flickr_images} alt="" />
      {!rocket.reserved && (
      <div className="falc-conatainer">
        <h4>{rocket.name}</h4>
        <p>{rocket.description}</p>
        <button
          type="button"
          onClick={() => {
            reserveHandler(rocket.id);
          }}
        >
          Reserve Rocket
        </button>
      </div>
      )}

      {rocket.reserved && (
      <div className="reserved-falc-conatainer">
        <h4>{rocket.name}</h4>
        <p>
          <h5>Reserved</h5>
          {rocket.description}
        </p>
        <button
          type="button"
          onClick={() => {
            cancelReserveHandler(rocket.id);
          }}
        >
          Cancel Reservation
        </button>
      </div>
      )}

    </div>
  );
}

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    flickr_images: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
};
