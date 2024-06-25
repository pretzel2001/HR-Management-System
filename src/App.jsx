import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App
