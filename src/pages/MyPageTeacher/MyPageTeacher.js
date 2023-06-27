import "./MyPageTeacher.scss";
import Footer from "../../components/Footer/Footer";
import myteacher2 from "../../assets/images/my-teacher2.jpeg";
import aia from "../../assets/images/student3.jpeg";
import miguel from "../../assets/images/miguel.jpeg";
import emily from "../../assets/images/emily.jpeg";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

function MyPageTeacher() {
  const { currentSignedUpTeacher } = useParams();
  const [teacher, setTeacher] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8080/teachers/${currentSignedUpTeacher}`)
      .then((response) => {
        const currentTeacherId = response.data;
        setTeacher(currentTeacherId);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(`There was an error retrieving the data: ${error}`);
      });
  }, [currentSignedUpTeacher]);

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
          <Link to={"/myteacherprofile"}>
            <h2 className="navbar__item">My Profile</h2>
          </Link>
          <Link to={"/login"}>
            <h2 className="navbar__item navbar-login">Sign Out</h2>
          </Link>
        </div>
      </nav>
      <h1 className="teacher-header">My Profile</h1>
      <section className="teacher-profile">
        <section className="teacher-profile__info">
          <img
            alt="profile images"
            className="teacher-profile__profile-image"
            src={myteacher2}
          />
          <h2 className="teacher-profile__inputs">
            <strong>Full name:</strong>  Melanie Ray{teacher.age}
          </h2>
          <h2 className="teacher-profile__inputs">
            <strong>Role:</strong> Web developer Teacher
          </h2>
          <h2 className="teacher-profile__inputs">
            <strong>Province:</strong> Ontario
          </h2>
          <h2 className="teacher-profile__inputs">
            <strong>City:</strong> Toronto
          </h2>
          <h2 className="teacher-profile__inputs">
            <strong>Grade/ teaching level:</strong> University
          </h2>
          <h2 className="teacher-profile__inputs">
            <strong>Account created at:</strong>Juli 04, 2022
          </h2>
        </section>
        <section className="teacher-details">
          <div className="teacher-details__about-me">
            <h2 className="teacher-details__header">
              <strong>About me</strong>
            </h2>
            <p className="teacher-details__about">
              I'm Melanie, a passionate web development instructor with 7 years
              of experience in teaching. Currently based in Toronto, Canada, I
              have been empowering students at Ryerson University with the
              knowledge and skills needed to excel in the field of web
              development. As a seasoned educator, I thrive on guiding aspiring
              developers through their learning journey and witnessing their
              growth. With a focus on practical application and staying
              up-to-date with industry trends, I strive to prepare students for
              real-world challenges in the ever-evolving world of web
              development. Join my classes and let's embark on an exciting
              learning adventure together.
            </p>
          </div>
          <div className="myteacher-reviews">
            <h2 className="myteacher-reviews__title">Average Reviews</h2>
            <h2 className="myteacher-reviews__icon"> ★★★★★</h2>
            <h2 className="myteacher-reviews__impresion">Fantastic!</h2>
            <button className="myteacher-reviews__button">view reviews</button>
          </div>
          <div className="myteacher-price">
            <h2 className="myteacher-price__title">
              Total Earnings This month
            </h2>
            <h2 className="myteacher-price__price">+1500 $</h2>
          </div>
        </section>
      </section>

      <h2 className="my-student-header">My Students</h2>
      <div className="my-students-list">
        <div className="my-student">
          <div>
            <img alt="profile images" className="my-student__image" src={aia} />
          </div>
          <div className="my-student__info">
            <h2 className="my-student__name">Aia Makhruka</h2>
            <h2 className="my-student__subject">Subject: Web Development</h2>
            <h2 className="my-student__date">Lesson: 7/7/2023</h2>
          </div>
        </div>
        <div className="my-student">
          <div>
            <img
              alt="profile images"
              className="my-student__image"
              src={miguel}
            />
          </div>
          <div className="my-student__info">
            <h2 className="my-student__name">Michael Tims</h2>
            <h2 className="my-student__subject">Subject: Web Development</h2>
            <h2 className="my-student__date">Lesson: 7/7/2023</h2>
          </div>
        </div>
        <div className="my-student">
          <div>
            <img
              alt="profile images"
              className="my-student__image"
              src={emily}
            />
          </div>
          <div className="my-student__info">
            <h2 className="my-student__name">Emily Davis</h2>
            <h2 className="my-student__subject">Subject: Web Development</h2>
            <h2 className="my-student__date">Lesson: 7/7/2023</h2>
          </div>
        </div>
      </div>

      <section className="teacher-Reminder">
        <h2 className="teacher-Reminder__header">Reminder</h2>
        <h2 className="teacher-Reminder__msg">
          The next lesson with Aia is scheduled in 5 days at 11:00!
        </h2>
        <img
          alt="profile images"
          className="teacher-Reminder__image"
          src={aia}
        />
        <button className="teacher-Reminder__button">visit profile</button>
      </section>
      <Footer />
    </>
  );
}
export default MyPageTeacher;
