import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const { dragons } = useSelector((store) => store.dragons);
  const filteredDragons = dragons.filter((dragon) => dragon.reserved === true);

  return (
    <div className="pro-container">
      <div>
        <h3>My Rockets</h3>
      </div>
      <div className="dragons-list">
        <h2>My Dragons</h2>
        <table>
          <tbody>
            {filteredDragons.map((dragon) => {
              const dragonId = dragon.id;
              return (
                <tr key={dragonId}>
                  <td>{dragon.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        <h3>My Missions</h3>
      </div>
    </div>
  );
}

export default Profile;
