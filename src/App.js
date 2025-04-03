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
import MathBooks from './pages/MathBooks/MathBooks';
import LanguageBooks from './pages/LanguageBooks/LanguageBooks';
import PhyicBooks from './pages/PhysicsBooks/PhysicsBooks';
import PlaylistPage from './components/PlayListpage/PlayListPage';
// import firebase from 'firebase/app'
// import 'firebase/firestore';
// import 'firebase/auth';
// import 'firebase/analytics';

// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';

// firebase.initializeApp({
//   apiKey: "AIzaSyC_xZ54dbHEUCRJzzcpvOZNx_RncbPiJH8",
//   authDomain: "live-chat-teachme.firebaseapp.com",
//   projectId: "live-chat-teachme",
//   storageBucket: "live-chat-teachme.firebasestorage.app",
//   messagingSenderId: "906090448812",
//   appId: "1:906090448812:web:4d305d1a930795a8d65c09",
//   measurementId: "G-KC2EWC32LW"})

// const auth = firebase.auth();
// const firestore = firebase.firestore();
// const analytics = firebase.analytics();

// Import the functions you need from the SDKs you need
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

// Import ChatRoom and SignIn components
import ChatRoom from './components/ChatRoom/ChatRoom'; // Adjust the path as needed
import SignIn from './components/SingIn/SignIn';
function App() {
  const [user] = useAuthState(auth); // Track authenticated user

  return (
    <>
          {/* <section>{user ? <ChatRoom /> : <SignIn />}</section> */}
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
        <Route path='/historyBooks' element={<HistoryBooks/>}/>
        <Route path='/mathBooks' element={<MathBooks/>}/>                            
        <Route path='/geographyBooks' element={<GeographyBooks/>}/>
        <Route path='/languageBooks'element={<LanguageBooks/>}/>
        <Route path='/engineeringBooks'element={<EngineeringBooks/>}/>
        <Route path='/csBooks'element={<CSBooks/>}/>
        <Route path='/physicsBooks'element={<PhyicBooks/>}/>
        <Route path='/chemistryBooks'element={<ChemistryBooks/>} />
        <Route path="/playlist/:playlistId" element={<PlaylistPage />} /> 

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
