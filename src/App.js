import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRockets } from './redux/rockets/rocketsSlice';
import Navigation from './components/Navigation';
import Profile from './components/profile';
import Rockets from './components/Rockets';
import Dragon from './components/dragons';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);
  return (
    <div>
      <Navigation />
      <div className="App">
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/dragons" element={<Dragon />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
