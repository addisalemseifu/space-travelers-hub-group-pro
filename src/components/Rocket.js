import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { reserve } from '../redux/rockets/rocketsSlice';

export default function Rocket({rocketName,description
    ,flickrImages,id,reserved}) {
        const dispatch = useDispatch();
        const {rockets} = useSelector((store)=>store.rocket);
  console.log(rockets);
        function reserveHandler(id) {
            console.log('reserve')
            
dispatch(reserve(id));
        }

        function cancelReserveHandler(id) {
            console.log('reserve')
dispatch(cancelReserve(id));
        }
  return (
    <div className='rocket-container'>
    <img src={flickrImages} alt="" />
    {!reserved && <div className='falc-conatainer'>
        <h4>{rocketName}</h4>
        <p>{description}</p>
        <button type='button' onClick={(e)=> {
            reserveHandler(id)
        }}>Reserve Rocket</button>
    </div>}

    {reserved && <div className='reserved-falc-conatainer'>
        <h4>{rocketName}</h4>
        <p><h5>Reserved</h5>{description}</p>
        <button
         type='button'
         onClick={()=> {
            cancelReserveHandler(id);
         }}
         >Cancel Reservation</button>
    </div>}
    
</div>
  )
}
