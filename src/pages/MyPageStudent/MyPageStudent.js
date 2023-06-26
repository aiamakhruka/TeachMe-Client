import Footer from "../../components/Footer/Footer";
import "./MyPageStudent.scss";
import myteacher1 from "../../assets/images/my-teacher1.jpeg";
import myteacher2 from "../../assets/images/my-teacher2.jpeg";
import aia from "../../assets/images/student3.jpeg";

import { Link } from 'react-router-dom';

function MyPageStudent() {
  return (
    <>
      <nav className="navbar">
        <Link to={"/"}>
          <h1 className="navbar__logo">T E A C H M E</h1>
        </Link>
        <div className="navbar__menu">
          <Link to={"/"}>
            <h2 className="navbar__item">Home</h2>
          </Link>
          <Link to={"/find"}>
            <h2 className="navbar__item">Find Teacher</h2>
          </Link>
          <Link to={"/mystudentprofile"}>
            <h2 className="navbar__item">My Profile</h2>
          </Link>
          <Link to={"/login"}>
            <h2 className="navbar__item navbar-login">Sign Out</h2>
          </Link>
        </div>
      </nav>{" "}
      <h1 className="teacher-header">My Profile</h1>
      <section className="teacher-profile">
        <section className="teacher-profile__info">
          <img className="teacher-profile__profile-image" src={aia} />
          <h2 className="teacher-profile__inputs">
            <storage>Full name:</storage>  Aia Makhruka
          </h2>
          <h2 className="teacher-profile__inputs">
            <storage>Role:</storage> Student
          </h2>
          <h2 className="teacher-profile__inputs">
            <storage>Province:</storage> Ontario
          </h2>
          <h2 className="teacher-profile__inputs">
            <storage>City:</storage> Toronto
          </h2>
          <h2 className="teacher-profile__inputs">
            <storage>Grade/ teaching level:</storage>  university
          </h2>
          <h2 className="teacher-profile__inputs">
            <storage>Account created at:</storage>November 09, 2022
          </h2>
        </section>
        <section className="teacher-details">
          <div className="teacher-details__about-me">
            <h2 className="teacher-details__header">
              <storage>About me</storage>
            </h2>
            <p className="teacher-details__about">
            I am a 20-year-old studying software engineering at BrainStation. Currently, I am actively engaged in a challenging capstone project, where I am applying my knowledge and skills to create innovative solutions. With a strong passion for technology and a drive to excel, I am constantly pushing myself to achieve my best. I thrive in collaborative environments and am eager to contribute my problem-solving abilities and creativity to make a positive impact.
            </p>
          </div>
            <h2 className="my-teacher-header">My Teachers</h2>
            <div className="my-teacher">
            <div >
            <img className="my-teacher__image" src={myteacher1}/>
          </div>
          <div className="my-teacher__info">
            <h2 className="my-teacher__name">James Johnson</h2>
            <h2 className="my-teacher__subject">Subject:English</h2>
            <h2 className="my-teacher__date">Lesson: 1/7/2023</h2>
          </div>
          </div>
          <div className="my-teacher">
          <div>
            <img className="my-teacher__image" src={myteacher2}/>
          </div>
          <div className="my-teacher__info">
            <h2 className="my-teacher__name">Melanie Ray</h2>
            <h2 className="my-teacher__subject">Subject: Web Development</h2>
            <h2 className="my-teacher__date">Lesson: 7/7/2023</h2>
          </div>
          </div>
        </section>
      </section>
      <section className="Reminder">
        <h2 className="Reminder__header">Reminder</h2>
        <h2 className="Reminder__msg">
        The next lesson with James is scheduled in 3 days at 9:00!
        </h2>
            <img className="Reminder__image" src={myteacher1} />
            <button className="Reminder__button">visit profile</button>
      </section>
      <Footer />
    </>
  );
}

export default MyPageStudent;
