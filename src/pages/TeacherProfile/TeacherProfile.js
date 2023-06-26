import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./TeacherProfile.scss";
import james from "../../assets/images/james.jpeg";
import viewer1 from "../../assets/images/viewer1.jpeg";
import viewer2 from "../../assets/images/viewer2.jpeg";
import viewer3 from "../../assets/images/viewer3.jpeg";
import { Link } from 'react-router-dom';

function TeacherProfile() {
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
      <h1 className="teacher-header">James's profile</h1>
      <section className="teacher-profile">
        <section className="teacher-profile__info">
          <img className="teacher-profile__profile-image" src={james} />
          <h2 className="teacher-profile__inputs">
            <storage>Full name:</storage>  James Johnson
          </h2>
          <h2 className="teacher-profile__inputs">
            <storage>Role:</storage> English Tutor
          </h2>
          <h2 className="teacher-profile__inputs">
            <storage>Province:</storage> British Columbia
          </h2>
          <h2 className="teacher-profile__inputs">
            <storage>City:</storage> Vancouver
          </h2>
          <h2 className="teacher-profile__inputs">
            <storage>Grade/ teaching level:</storage>  Grades 6-12
          </h2>
          <h2 className="teacher-profile__inputs">
            <storage>Account created at:</storage>January 10, 2023
          </h2>
        </section>
        <section className="teacher-details">
          <div className="teacher-details__about-me">
            <h2 className="teacher-details__header">
              <storage>About me</storage>
            </h2>
            <p className="teacher-details__about">
              I am a highly qualified English tutor with a strong educational
              background. I hold a Bachelor's degree in English Literature from
              XYZ University, where I developed a deep understanding and
              appreciation for the power of language and storytelling.
              Additionally, I completed a Master's degree in Education,
              specializing in curriculum development and instructional
              strategies. My academic training, combined with years of teaching
              experience, equips me with the knowledge and skills to deliver
              effective and engaging lessons. I am dedicated to helping students
              thrive academically and reach their full potential in the field of
              English. Let's embark on a learning journey together and explore
              the beauty of language and literature.
            </p>
          </div>
          <div className="teacher-price">
            <h2 className="teacher-price__title">
              <storage>Price</storage>
            </h2>
            <h2 className="teacher-price__price">$9 Per session</h2>
            <button className="teacher-price__button">Book Now</button>
          </div>
          <div className="teacher-reviews">
            <h2 className="teacher-reviews__title">Average Reviews</h2>
            <h2 className="teacher-reviews__icon"> ★★★★</h2>
            <h2 className="teacher-reviews__impresion">Great!</h2>
          </div>
        </section>
      </section>
      <section className="reviews">
        <h2 className="reviews__header">Recent Reviews</h2>
        <div className="reviews__cards">
          <div className="reviews__card">
            <p className="reviews__review">
              Exceptional tutor. James's expertise and engaging style helped me
              improve significantly. Highly recommended!
            </p>
            <img className="reviews__profile-image" src={viewer1} />
            <h2 className="reviews__name">Benjamin Rodriguez</h2>
            <h2 className="reviews__icon">★★★★★</h2>
          </div>
          <div className="reviews__card">
            <p className="reviews__review">
              Insightful tutor. James enhanced my understanding of literature,
              although sometimes fast-paced. Great tutor!
            </p>
            <img className="reviews__profile-image" src={viewer2} />
            <h2 className="reviews__name">Michael Thompson</h2>
            <h2 className="reviews__icon">★★★★</h2>
          </div>
          <div className="reviews__card">
            <p className="reviews__review">
              Inspiring tutor. James's personalized approach boosted my
              confidence in writing. Highly recommend his invaluable guidance.
            </p>
            <img className="reviews__profile-image" src={viewer3} />
            <h2 className="reviews__name">Samuel Brown</h2>
            <h2 className="reviews__icon">★★★★★</h2>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default TeacherProfile;
