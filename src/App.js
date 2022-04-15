import { Routes, Route } from 'react-router-dom';
import './App.css';

// Import Pages
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import NotFoundPage from './pages/NotFoundPage';
import AboutUsPage from './pages/AboutUsPage';
import ArtistPage from './pages/ArtistPage';
import RoadMapPage from './pages/RoadMapPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/landing' element={<LandingPage />}>
          <Route index element={<HomePage />} />
          {/* <Route index path='/landing/home' element={<HomePage />} /> */}
          <Route path='/landing/about-us' element={<AboutUsPage />} />
          <Route path='/landing/roadmap' element={<RoadMapPage />} />
          <Route path='/landing/artist' element={<ArtistPage />} />
        </Route>
        
        {/* <Route path='/about-us' element={<AboutUs />} /> */}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
