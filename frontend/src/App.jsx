import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Create from './pages/Create';
import HomePage from './pages/HomePage';
import Update from './pages/Update';

const App = () => {
  return (
    <div className='h-screen w-full bg-zinc-800'>
      <Navbar />
  
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<Create />} />
        <Route path='/update/:id' element={<Update />} />
      </Routes>
    </div>
  );
};

export default App;
