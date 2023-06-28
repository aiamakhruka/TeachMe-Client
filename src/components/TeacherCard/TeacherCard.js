import React from "react";
import "./TeacherCard.scss";
import { Link } from "react-router-dom";

// import p1 from "../../assets/avatars/1.jpg"
function TeacherCard({ teacher }) {
  // const ListOfTeachersPictures =[p1]
  return (
    <section className="card">
      <div className="card__wrapper">
        <figure>
          <img src="https://www.venkateshwaragroup.in/vgiblog/wp-content/uploads/2022/09/Untitled-design-2-1-1050x525.jpg" alt="profile picture of a teacher" />
          {/* <img src="https://www.venkateshwaragroup.in/vgiblog/wp-content/uploads/2022/09/Untitled-design-2-1-1050x525.jpg" alt="profile picture of a teacher" /> */}
        </figure>
        <div className="card__body">
          <h2>{teacher.name}</h2>
        <div className="teacher-info">
          <p>Age : {teacher.age}</p>
          <p>Subject : {teacher.specialization}</p>
          <p>Level : {teacher.teaching_level}</p>
          <p>Experience : {teacher.experience}</p>
          <p>Rating : {teacher.rating}</p>
          <p>Province : {teacher.province}</p>
          <p>City : {teacher.city}</p>
          <p>Price : {teacher.price}</p>
          <Link to={"/teacherprofile"}><button>Enroll</button></Link>
        </div>
        </div>
      </div>
    </section>
  );
}

export default TeacherCard;
