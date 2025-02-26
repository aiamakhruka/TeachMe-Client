import './MyUpcomingLessonsStudent.scss'
import React from 'react';
import { Link } from "react-router-dom";

function MyUpcomingLessonsStudent() {
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
        </>
    )
}
export default MyUpcomingLessonsStudent;