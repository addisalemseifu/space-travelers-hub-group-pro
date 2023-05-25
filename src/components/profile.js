import React from 'react';
import { useSelector } from 'react-redux';
import MissionProfile from './missionProfile';

function Profile() {
  const { dragons } = useSelector((store) => store.dragons);
  const filteredDragons = dragons.filter((dragon) => dragon.reserved === true);

  return (
    <div className="pro-container">
      <div>
        <h3>My Rockets</h3>
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
