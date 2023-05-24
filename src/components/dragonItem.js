import React from 'react';
import PropTypes from 'prop-types';

const DragonItem = ({ name, description, image }) => (
  <div className="dragoncont">
    <div className="dragonsubcont">
      <img src={image} alt="dragon" className="img" />
      <div className="textcont">
        <div className="header">
          <h2>{name}</h2>
        </div>
        <div className="para">
          <p>{description}</p>
        </div>
        <div className="btncont">
          <button className="btn" type="button">
            Reserve dragon
          </button>
        </div>
      </div>
    </div>
  </div>
);

DragonItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default DragonItem;
