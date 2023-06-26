import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import LogInPage from './pages/LogInPage/LogInPage';
import FindTeacherPage from './pages/FindTeacherPage/FindTeacherPage';
import AddTeacherpage from './pages/AddTeacherpage/AddTeacherpage';
import HomePage from './pages/HomePage/HomePage';
import TeacherProfile from './pages/TeacherProfile/TeacherProfile';
import MyPageStudent from './pages/MyPageStudent/MyPageStudent';
import MyPageTeacher from './pages/MyPageTeacher/MyPageTeacher';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LogInPage/>}/>
        <Route path='/find' element={<FindTeacherPage/>}/>
        <Route path='/add' element={<AddTeacherpage/>}/>
        <Route path="/add/:currentSignedUpTeacher" element={<AddTeacherpage/>} />
        <Route path='/teacherprofile' element={<TeacherProfile/>}/>
        <Route path='/mystudentprofile' element={<MyPageStudent/>}/>
        <Route path='/myteacherprofile' element={<MyPageTeacher/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
