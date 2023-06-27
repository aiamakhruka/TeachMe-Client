import { useState } from "react";
import axios from "axios";
import "./AddTeacherpage.scss";
import CityFilter from "../../components/CityFilter/CityFilter";
import { postTeacherEndpoint } from "../../utils/api";
import { useParams, useNavigate } from "react-router-dom";

function AddTeacherpage() {
  const { currentSignedUpTeacher } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [formState, setFormState] = useState({});
  const [errors, setErrors] = useState({});
  const [image, setImage] = useState(null);
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");

  console.log(image);
  console.log(hasError);
  console.log(isLoading);
  const formFields = [
    { id: "fullName", label: "Full Name", type: "text", validation: "text" },
    {
      id: "age",
      label: "Age",
      type: "number",
      validation: { type: "number", min: 25, max: 60 },
    },
    {
      id: "specialization",
      label: "Specialization",
      type: "text",
      validation: "text",
    },
    {
      id: "teachingLevel",
      label: "Teaching Level",
      type: "select",
      validation: "text",
      options: ["University", "Elementary", "High School", "Middle School"],
    },
    {
      id: "yearsOfExperience",
      label: "Years of Experience",
      type: "number",
      validation: "number",
    },
    {
      id: "price",
      label: "Class Price",
      type: "number",
      validation: { type: "number", max: 200 },
    },
    {
      id: "teachingOption",
      label: "Teaching Option",
      type: "select",
      validation: "text",
      options: ["Online", "In Person"],
    },
    // {"image": image}
  ];

  const validateField = (field, value) => {
    if (typeof field.validation === "string") {
      switch (field.validation) {
        case "text":
          return value ? null : `${field.label} is required`;
        case "number":
          return value && !isNaN(value)
            ? null
            : `Valid ${field.label.toLowerCase()} is required`;
        default:
          return null;
      }
    } else {
      const { type, min, max } = field.validation;
      if (type === "number") {
        if (!value || isNaN(value)) {
          return `Valid ${field.label.toLowerCase()} is required`;
        } else if (min !== undefined && value < min) {
          return `${field.label} must be at least ${min}`;
        } else if (max !== undefined && value > max) {
          return `${field.label} must be no more than ${max}`;
        }
      }
      return null;
    }
  };

  const handleChange = (e, field) => {
    const value = field.id === "image" ? e.target.files[0] : e.target.value;
    if (field.id === "image") {
      setImage(value);
    } else {
      setFormState({
        ...formState,
        [field.id]: value,
      });
      setErrors({
        ...errors,
        [field.id]: validateField(field, value),
      });
    }
  };

  const handleProvinceChange = (province) => {
    setProvince(province);
  };

  const handleCityChange = (city) => {
    setCity(city);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    let formIsValid = true;
    for (const field of formFields) {
      const error = validateField(field, formState[field.id]);
      if (error) {
        formIsValid = false;
      }
      newErrors[field.id] = error;
    }

    setErrors(newErrors);
    if (formIsValid) {
      setIsLoading(true);

      // Form submission logic
      const formFieldsData = {
        ...formState,
        province: province,
        city: city,
      };
      let fd = new FormData();
      // const keys =   Object.keys(formFieldsData)

      // for (let i = 0; i < keys.length; i++) {
      //   console.log(keys)
      //   fd.append(keys[i],formFieldsData[keys[i]])
      // }
      // fd.append("image", e.target.image.files[0]);
      fd.append("image", e.target.image.files[0]);

      // Add the currentSignedUpTeacher value to formFieldsData
      // fd.append("currentSignedUpTeacher", currentSignedUpTeacher) ;
      console.log(fd);
      axios
        .post(postTeacherEndpoint, fd, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          setIsLoading(false);
          setFormState({});
          setImage(null);
          console.log(response.data);
          navigate(`/myteacherprofile/${currentSignedUpTeacher}`); //navigate to teacher profile with id
          // navigate('/myteacherprofile');
        })
        .catch((error) => {
          setIsLoading(false);
          setHasError(true);
          console.error(error);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <form method='POST' encType='multipart/form-data' onSubmit={handleSubmit}> */}
      <input type="file" accept="image/*" name="image" />
      <div className="form-row">
        {formFields.map((field) => (
          <div className="form-field" key={field.id}>
            <label htmlFor={field.id}>{field.label}</label>
            {field.type === "select" ? (
              <select
                id={field.id}
                onChange={(e) => handleChange(e, field)}
                value={formState[field.id] || ""}
              >
                <option value="">Select an option</option>
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={field.id}
                type={field.type}
                onChange={(e) => handleChange(e, field)}
                value={formState[field.id] || ""}
              />
            )}
            {errors[field.id] && <div>{errors[field.id]}</div>}
          </div>
        ))}
      </div>
      <CityFilter
        selectedProvince={province}
        selectedCity={city}
        onProvinceChange={handleProvinceChange}
        onCityChange={handleCityChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddTeacherpage;
