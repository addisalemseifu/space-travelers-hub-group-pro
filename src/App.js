import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRockets } from './redux/rockets/rocketsSlice';
import Navigation from './components/Navigation';
import Profile from './components/profile';
import Rockets from './components/Rockets';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, []);
  return (
    <div>
      <Navigation />
      <div className="App">
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
