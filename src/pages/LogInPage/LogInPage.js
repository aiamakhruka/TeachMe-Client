import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LogInPage.scss";
import {
  postUsersSignupEndpoint,
  postUsersLoginEndpoint,
} from "../../utils/api";



function LogInPage() {
  const navigate = useNavigate();
  // const [gotSignedup, setgotSignedup] = useState(false);
  const [isSignup, setIsSignup] = useState(true);
  const [isLoginFormTransformed, setIsLoginFormTransformed] = useState(false);
  const [isSignupFormTransformed, setIsSignupFormTransformed] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [currentSignedUpTeacher, setcurrentSignedUpTeacher] = useState(0);

  useEffect(() => {
    if (currentSignedUpTeacher !== 0 && selectedRole === "teacher") {
      navigate("/add");
    }
  }, [currentSignedUpTeacher, navigate, selectedRole]);

  const handleSignupClick = () => {
    setIsSignup(true);
    setIsLoginFormTransformed(false);
    setIsSignupFormTransformed(!isSignupFormTransformed);
    setError("");
  };

  const handleLoginClick = () => {
    setIsSignup(false);
    setIsLoginFormTransformed(!isLoginFormTransformed);
    setIsSignupFormTransformed(false);
    setError("");
  };

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password || !selectedRole) {
      setError("All fields are required.");
      return;
    }

    axios
      .post(postUsersSignupEndpoint, {
        username: username,
        email: email,
        password: password,
        role: selectedRole,
      })
      .then((response) => {
        setcurrentSignedUpTeacher(response.data[0].id);
        // setgotSignedup(true);

        // Navigate to the correct page based on role
        if (selectedRole === "student") {
          navigate("/find");
        } else if (selectedRole === "teacher") {
          const currentTeacherId = response.data[0].id;
          navigate(`/add/${currentTeacherId}`);
        }
      })
      .catch((error) => {
        console.error(error.response.data);
        setError("Signup failed. Please try again.");
      });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Name and password are required.");
      return;
    }

    axios
      .post(postUsersLoginEndpoint, {
        username,
        password,
      })
      .then((response) => {
        if (response.data.role === "student") {
          navigate("/find");
        } else if (response.data.role === "teacher") {
          navigate("/");
          // const currentTeacherId = response.data[0].id;

          // navigate(`/myteacherprofile/${currentTeacherId}`);
        }
      })
      .catch((error) => {
        console.error(error.response.data);
        setError("Invalid credentials. Please try again.");
      });
  };

  return (
    <>
      <div className="placement">
        <div className="container">
          <div
            className={`message ${isSignup ? "signup" : "login"} ${
              isLoginFormTransformed || isSignupFormTransformed
                ? "transformed"
                : ""
            }`}
          >
            <div className="btn-wrapper">
              <button
                className="button"
                id="signup"
                onClick={handleSignupClick}
              >
                Sign Up
              </button>
              <button className="button" id="login" onClick={handleLoginClick}>
                Login
              </button>
            </div>
          </div>
          {isSignup ? (
            <div
              className={`form form--signup ${
                isSignupFormTransformed ? "" : "transformed"
              }`}
            >
              <div className="form--heading">Sign Up!</div>
              <form autoComplete="off" onSubmit={handleSignupSubmit}>
                <input
                  type="text"
                  placeholder="Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <select
                  className="dropdown"
                  value={selectedRole}
                  onChange={handleRoleChange}
                >
                  <option value="">Select Role</option>
                  <option value="teacher">Teacher</option>
                  <option value="student">Student</option>
                </select>
                <button className="button" type="submit">
                  Sign Up
                </button>
                {error && <div className="error">{error}</div>}
              </form>
            </div>
          ) : (
            <div
              className={`form form--login ${
                isLoginFormTransformed ? "" : "transformed"
              }`}
            >
              <div className="form--heading">Login!</div>
              <form autoComplete="off" onSubmit={handleLoginSubmit}>
                <input
                  type="text"
                  placeholder="User Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="button" type="submit">
                  Login
                </button>
                {error && <div className="error">{error}</div>}
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default LogInPage;
