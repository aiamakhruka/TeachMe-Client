import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import LogInPage from './pages/LogInPage/LogInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import FindTeacherPage from './pages/FindTeacherPage/FindTeacherPage';
import AddTeacherpage from './pages/AddTeacherpage/AddTeacherpage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LogInPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/find' element={<FindTeacherPage/>}/>
        <Route path='/add' element={<AddTeacherpage/>}/>
      </Routes>
      <h1>welcome to TeachMe website</h1>
    </BrowserRouter>
  );
}

export default App;
