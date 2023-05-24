import React from 'react';
import MissionProfile from './missionProfile';

function Profile() {
  return (
    <div className="pro-container">
      <div>
        <h3>My Missions</h3>
        <MissionProfile />
      </div>
      <div>
        <h3>My Rockets</h3>
      </div>
    </div>
  );
}

export default Profile;
