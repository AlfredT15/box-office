import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Error from './pages/Error';
import Starred from './pages/Starred';
import Show from './pages/Show';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/starred" element={<Starred />} />
        <Route exact path="/show/:id" element={<Show />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
