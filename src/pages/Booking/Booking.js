import './Booking.scss'
import React from 'react';
import { Link } from "react-router-dom";
import Footer from '../../components/Footer/Footer';
import myteacher2 from '../../assets/images/my-teacher2.jpeg'
import bg from '../../assets/images/bg.jpeg';
import aia from '../../assets/images/student3.jpeg';
import video from '../../assets/images/video.jpeg';

function Booking() {
    return(
        <>
        <nav className="navbar">
        <Link to={"/"}>
          <h1 className="navbar__logo">T E A C H M E</h1>
        </Link>
        <div className="navbar__menu">
          <Link to={"/"}>
            <h2 className="navbar__item">Home</h2>
          </Link>
          <Link to={"/myteacherprofile"}>
            <h2 className="navbar__item">My Profile</h2>
          </Link>
          <Link to={"/login"}>
            <h2 className="navbar__item navbar-login">Sign Out</h2>
          </Link>
        </div>
      </nav>
      <section className=''>
      <div>
      <img src={bg}  className='profile-bg'/>
      <img src={myteacher2} className='profile-bg__avatar'/>
<h1 className='profile-bg__header'>My Upcomming lesson</h1>
      </div>
      <h2 className='sub-header'>My Lesson with Aia</h2>
      <div className='lesson-info'>
        <div className='lesson-info__left'>
          <div className='lesson-info__detsils'>
            <h2 className='lesson-info__headers'>Date</h2>
            <p>07/07/2023</p>
          </div>
          <div className='lesson-info__detsils'>
            <h2 className='lesson-info__headers'>Time</h2>
            <p>11:00</p>
          </div>
          <div className='lesson-info__detsils'>
            <h2 className='lesson-info__headers'>Subject</h2>
            <p>Web development</p>
            <h2>Lesson 1</h2>
          </div>
        </div>
        <div>
          <img src={aia} className='lesson-info__right'/>
        </div>
      </div>
      <div className='request-box'>
        <h2 className='request-box__header'>Aia's requests</h2>
        <h3 className='request-box__paragraphy'>I need help in understanding APIs better as a web development
        student. I would appreciate your guidance and expertise in
        navigating API concepts and their practical implementation.</h3>
      </div>
      <div  className='preparations'>
        <div>
        <h2 className='preparations__header'>What preparations would you like to give Aia ?</h2>
        <p  className='preparations__side-button'>Edit</p>
        </div>
        <div>
          "For our first web development lesson, please ensure you 
          have the following preparations completed:
          1.Install a code editor like Visual Studio Code or Sublime
          Text.
          2.Set up a development 
          3.
          4.
          By having these preparations in place, we can dive right into practical
          coding exercises and make the most of our first session together."
        </div>
      </div>
      <img src={video} className=''/>
      </section>
      <Footer/>
        </>
    )
}
export default Booking;