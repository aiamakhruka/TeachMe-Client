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
import Reviews from './pages/Reviews/Reviews';
import Booking from './pages/Booking/Booking';
import MyUpcomingLessonsStudent from './pages/MyUpcomingLessonsStudent/MyUpcomingLessonsStudent';
import MyUpcomingLessonsTeacher from './pages/MyUpcomingLessonsTeacher/MyUpcomingLessonsTeacher';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LogInPage/>}/>
        <Route path='/find' element={<FindTeacherPage/>}/>
        <Route path='/add' element={<AddTeacherpage/>}/>
        <Route path="/add/:currentSignedUpTeacher" element={<AddTeacherpage/>} />
        <Route path="/myteacherprofile/:currentSignedUpTeacher" element={<MyPageTeacher/>} />
        <Route path="/myteacherprofile" element={<MyPageTeacher/>} />
        <Route path="/mystudentprofile/:currentSignedUpStudent" element={<MyPageStudent/>} />
        <Route path="/mystudentprofile" element={<MyPageStudent/>} />
        <Route path='/teacherprofile' element={<TeacherProfile/>}/>
        <Route path='/myUpcoming' element={<MyPageStudent/>}/>
        <Route path='/myUpcoming' element={<MyPageTeacher/>}/>
        <Route path='/myUpcomingLessonsStudent' element={<MyUpcomingLessonsStudent/>}/>
        <Route path='/myUpcomingLessonsTeacher' element={<MyUpcomingLessonsTeacher/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/reviews' element={<Reviews/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
