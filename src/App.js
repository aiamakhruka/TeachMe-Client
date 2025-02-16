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
import ChemistryBooks from './pages/ChemistryBooks/ChemistryBooks';
import HistoryBooks from './pages/HistoryBooks/HistoryBooks';
import CSBooks from './pages/CSBooks/CSBooks';
import EngineeringBooks from './pages/EngineeringBooks/EngineeringBooks';
import GeographyBooks from './pages/GeographyBooks/GeographyBooks';
i
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
        <Route path='/mathBooks' element={<MathBooks/>}/>                            
        <Route path='/historyBooks'element={<HistoryBooks/>}/>
        <Route path='/geographyBooks' element={<GeographyBooks/>}/>
        <Route path='/languageBooks'element={<LanguageBooks/>}/>
        <Route path='/engineeringBooks'element={<EngineeringBooks/>}/>
        <Route path='/csBooks'element={<CSBooks/>}/>
        <Route path='/physicsBooks'element={<PhysicsBooks/>}/>
        <Route path='/chemistryBooks'element={<ChemistryBooks/>} />
        
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
