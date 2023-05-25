import React from 'react';
import { useSelector } from 'react-redux';
import MissionProfile from './missionProfile';

function Profile() {
  const { dragons } = useSelector((store) => store.dragons);
  const { rockets } = useSelector((store) => store.rocket);
  const filteredDragons = dragons.filter((dragon) => dragon.reserved === true);
  const filteredRockets = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div className="pro-container">
      <div className="dragons-list">
        <h4>My Rockets</h4>
        <table className="profile_table">
          <tbody>
            { filteredRockets.length === 0 && <p>You have no reserved dragons</p>}
            {filteredRockets.map((rocket) => {
              const rocketId = rocket.id;
              return (
                <tr key={rocketId}>
                  <td>{rocket.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="dragons-list">
        <h3>My Dragons</h3>
        <div className="dragons-list2">
          <table>
            <tbody>
              { filteredDragons.length === 0 && <p>You have no reserved dragons</p>}
              {filteredDragons.map((dragon) => {
                const dragonId = dragon.id;
                return (
                  <div className="dragons-item" key={dragonId}>
                    <tr key={dragonId}>
                      <td>{dragon.name}</td>
                    </tr>
                  </div>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <MissionProfile />
    </div>
  );
}

export default Profile;
