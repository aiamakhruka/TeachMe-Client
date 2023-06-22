// import React, { useState } from "react";
// import "./LogInPage.scss";

// function LogInPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLogin, setIsLogin] = useState(true);

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login/signup logic here
//   };

//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//   };
//   return (
//     <>
//       <div className="login-signup-page">
//         <h2>{isLogin ? "Login" : "Sign Up"}</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={handleEmailChange}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={handlePasswordChange}
//           />
//           <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
//         </form>
//         <p onClick={toggleForm}>
//           {isLogin ? "Create an account" : "Already have an account? Login"}
//         </p>
//       </div>
//     </>
//   );
// }

// export default LogInPage;
