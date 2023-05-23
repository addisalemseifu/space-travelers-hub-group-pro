import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Profile from './components/profile';

function App() {
  return (
    <div>
      <Navigation />
      <div className="App">
        <Routes>
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
