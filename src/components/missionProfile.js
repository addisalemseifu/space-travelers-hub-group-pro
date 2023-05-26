import React from 'react';
import { useSelector } from 'react-redux';

const MissionProfile = () => {
  const missions = useSelector((state) => state.missions);
  const filteredMissions = missions.filter((mission) => mission.reserved === true);

  return (
    <div className="dragons-list">
      <h4 className="profile-header">My Dragons</h4>
      <table className="profile_table">
        <tbody className="body">
          { filteredMissions.length === 0 && <p>You have no reserved dragons</p>}
          {filteredMissions.map((mission) => {
            const missionId = mission.mission_id;
            return (
              <tr key={missionId}>
                <td className="text">{mission.mission_name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MissionProfile;
