import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Animation from './Pages/animation/Animation';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/intro' element={<Animation letter="N" />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
