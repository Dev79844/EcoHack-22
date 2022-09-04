import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Blogs from './Elements/Blogs';
import './App.css';
// import Navbar from './Elements/Navbar';
// import HeroSection from './Elements/HeroSection';
import Cards from './Elements/Cards';
import Credits from './Elements/Credits';
import Homepage from './Pages/Homepage';
// import Footer from './Elements/Footer';
// import Explore from './Elements/Explore';
// import Charts from './Elements/Charts';
// import Credits from './Elements/Credits';
import MadeBy from './Pages/MadeBy';
import EnergiesPage from './Pages/EnergiesPage';
import MainContent from './Pages/MainContent';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Cards' element={<EnergiesPage />} />
        <Route path='/Credits' element = {<MadeBy />}  />
        <Route path='/Explore' element = {<MainContent />} />
      </Routes>
      
    </div>
  );
}

export default App;