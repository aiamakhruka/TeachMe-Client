import React, { useState, useEffect } from "react";
import TeacherCard from "../../components/TeacherCard/TeacherCard";
import "./FindTeacherPage.scss";
import axios from "axios";
import { getTeachersListEndpoint } from "../../utils/api";
import { Link } from "react-router-dom";
import TeacherFilter from "../../components/TeacherFilter/TeacherFilter";

function FindTeacherPage() {
  const [teachersList, setTeachersList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("subject");
  const [selectedExperience, setSelectedExperience] = useState(
    "Years of experience"
  );
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedLevel, setSelectedLevel] = useState("university");
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [selectedAge, setSelectedAge] = useState(0);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get(getTeachersListEndpoint, {
          params: {
            subject: selectedSubject !== "subject" ? selectedSubject : undefined,
            experience:
              selectedExperience !== "Years of experience"
                ? selectedExperience
                : undefined,
            rating: selectedRating !== 0 ? selectedRating : undefined,
            level: selectedLevel !== "university" ? selectedLevel : undefined,
            price: selectedPrice !== 0 ? selectedPrice : undefined,
            age: selectedAge !== 0 ? selectedAge : undefined,
            city: selectedCity !== "" ? selectedCity : undefined,
            province: selectedProvince !== "" ? selectedProvince : undefined,
          },
        });
        setTeachersList(response.data);
        console.log(response.data);
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeachers();
  }, [
    selectedSubject,
    selectedExperience,
    selectedRating,
    selectedLevel,
    selectedPrice,
    selectedAge,
    selectedCity,
    selectedProvince,
  ]);

  const handleFilterTeachers = async () => {
    try {
      setIsLoading(true); // Set isLoading to true before making the API call
      const response = await axios.get(getTeachersListEndpoint, {
        params: {
          subject: selectedSubject !== "subject" ? selectedSubject : undefined,
          experience:
            selectedExperience !== "Years of experience"
              ? selectedExperience
              : undefined,
          rating: selectedRating !== 0 ? selectedRating : undefined,
          level: selectedLevel !== "university" ? selectedLevel : undefined,
          price: selectedPrice !== 0 ? selectedPrice : undefined,
          age: selectedAge !== 0 ? selectedAge : undefined,
          city: selectedCity !== "" ? selectedCity : undefined,
          province: selectedProvince !== "" ? selectedProvince : undefined,
        },
      });
      setTeachersList(response.data);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  if (hasError) {
    return <h1>Error 404</h1>;
  }

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
      </nav>
      <section className="find-teacher">
        <TeacherFilter
          selectedSubject={selectedSubject}
          setSelectedSubject={setSelectedSubject}
          selectedExperience={selectedExperience}
          setSelectedExperience={setSelectedExperience}
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
          selectedLevel={selectedLevel}
          setSelectedLevel={setSelectedLevel}
          selectedAge={selectedAge}
          setSelectedAge={setSelectedAge}
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          selectedProvince={selectedProvince}
          setSelectedProvince={setSelectedProvince}
          onFilterTeachers={handleFilterTeachers}
        />
        <section className="teachers-cards">
          {teachersList.map((teacher) => (
            <TeacherCard teacher={teacher} key={teacher.id} />
          ))}
        </section>
      </section>
    </>
  );
}

export default FindTeacherPage;
