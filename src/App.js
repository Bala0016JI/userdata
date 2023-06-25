import React from 'react';
import './App.css';
import Profile from './profile/profile';
import ProfileView from './profile/profileview';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
    <Route path="" element={<Navigate to="/profile"/>}></Route>
    <Route path="/profile" element={<Profile/>}></Route>
    <Route path="/profile-view" element={<ProfileView/>}></Route>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
