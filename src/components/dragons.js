import React from 'react';

function Dragon() {
  return (
    <div className="dragoncont">
      <div className="dragonsubcont">
        <img src="https://picsum.photos/100/100" alt="randomimg" className="img" />
        <div className="textcont">
          <div className="header">
            <h4>Falcon 1</h4>
          </div>
          <div className="para">
            <p>
              { /* eslint-disable-next-line max-len */ }
              The Rockets section displays a list of all available SpaceX rockets. Users can book each rocket by clicking the reservation button or cancel the previously made booking. The same layout is used to form the Dragons section [added only if your team has 3 members].
            </p>
          </div>
          <div className="btncont">
            <button className="btn" type="button">
              Reserve Rocket
            </button>
          </div>
        </div>
      </div>
      <div className="dragonsubcont">
        <img src="https://picsum.photos/100/100" alt="randomimg" className="img" />
        <div className="textcont">
          <div className="header">
            <h4>Falcon 1</h4>
          </div>
          <div className="para">
            <p>
              { /* eslint-disable-next-line max-len */ }
              The Rockets section displays a list of all available SpaceX rockets. Users can book each rocket by clicking the reservation button or cancel the previously made booking. The same layout is used to form the Dragons section [added only if your team has 3 members].
            </p>
          </div>
          <div className="btncont">
            <button className="btn" type="button">
              Reserve Rocket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dragon;
