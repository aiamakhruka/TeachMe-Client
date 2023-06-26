import PropTypes from 'prop-types';
import './TeacherFilter.scss';
import PriceSlider from '../PriceRangeSlider/PriceSlider';
import AgeSlider from '../AgeSlider/AgeSlider';
import RatingSelector from '../RatingSelector/RatingSelector';
import CityFilter from '../CityFilter/CityFilter';

function TeacherFilter({
  setSelectedSubject,
  setSelectedExperience,
  setSelectedRating,
  setSelectedLevel,
  setSelectedAge,
  setSelectedPrice,
  setSelectedCity,
  setSelectedProvince,
  onFilterTeachers,
}) {

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  const handleExperienceChange = (event) => {
    setSelectedExperience(event.target.value);
  };

  const handleRatingChange = (value) => {
    setSelectedRating(value);
  };

  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
  };

  const handlePriceChange = (value) => {
    setSelectedPrice(value);
  };

  const handleAgeChange = (value) => {
    setSelectedAge(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFilterTeachers();
  };

  return (
    <section className="search-teacher">
      <h2>Find Your Teacher:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="sort-subject">Subject</label>
        <select
          name="sort-subject"
          id="sort-subject"
          className="dropdown"
          value={setSelectedSubject}
          onChange={handleSubjectChange}
        >
          <option value="subject">Subject</option>
          <option value="Math">Math</option>
          <option value="Biology">Biology</option>
          <option value="Physics">Physics</option>
          <option value="Chemistry">Chemistry</option>
          <option value="English">English</option>
          <option value="History">History</option>
          <option value="Geography">Geography</option>
          <option value="French">French</option>
        </select>

        <AgeSlider age={setSelectedAge} handleAgeChange={handleAgeChange} />

        <label htmlFor="sort-experience">Years of Experience</label>
        <select
          name="sort-experience"
          id="sort-experience"
          className="dropdown"
          value={setSelectedExperience}
          onChange={handleExperienceChange}
        >
          <option value="Years of experience">Years of experience</option>
          <option value="1">1 year</option>
          <option value="2">2 years</option>
          <option value="3">3 years</option>
          <option value="4">4 years</option>
          <option value="5">5 years</option>
          <option value="6">6 years</option>
          <option value="7">7 years</option>
          <option value="8">8 years</option>
          <option value="9">9 years</option>
          <option value="10">10 years</option>
          <option value="11">11 years</option>
          <option value="12">12 years</option>
          <option value="13">13 years</option>
          <option value="14">14 years</option>
          <option value="15">15 years</option>
          <option value="16">16 years</option>
          <option value="17">17 years</option>
          <option value="18">18 years</option>
          <option value="19">19 years</option>        
          <option value="20">20 years</option>        
          </select>

        <RatingSelector rating={setSelectedRating} handleRatingChange={handleRatingChange} />

        <label htmlFor="sort-level">Education Level</label>
        <select
          name="sort-level"
          id="sort-level"
          className="dropdown"
          value={setSelectedLevel}
          onChange={handleLevelChange}
        >
          <option value="education level">Education level</option>
          <option value="elementary">Elementary</option>
          <option value="middle school">Middle school</option>
          <option value="high school">High school</option>
          <option value="university">University</option>
        </select>

        <PriceSlider price={setSelectedPrice} handlePriceChange={handlePriceChange} />

        <CityFilter
          onCityChange={setSelectedCity}
          onProvinceChange={setSelectedProvince}
        />

        <button type="submit">Filter</button>
      </form>
    </section>
  );
}

TeacherFilter.propTypes = {
  setSelectedSubjectFilter: PropTypes.func.isRequired,
  setSelectedExperienceFilter: PropTypes.func.isRequired,
  setSelectedRatingFilter: PropTypes.func.isRequired,
  setSelectedLevelFilter: PropTypes.func.isRequired,
};
export default TeacherFilter;
