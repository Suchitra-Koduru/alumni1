// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';

// function RegisterComponent() {
//   const [user, setUser] = useState({
//     email: "", password: "", firstname: "", lastname: ""
//   })
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate()
//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
// };

//   const handleSignup = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     axios.post("http://localhost:5000/user/signup", user)
//       .then((res) => {
//         setLoading(false);
//         if (res.status === 200) {
//           alert(res.data.message)
//           navigate('/login');
//         } else {
//           setError(res.data.msg || 'Signup failed');
//         }
//       }).catch(err => {
//         setLoading(false);
//         setError('Error in Signup')
//       })
//   }
//   return (
//     <div className="vh-100">
//     <br/><br/>
//       <div className="container-fluid d-flex align-items-center justify-content-center h-75">
//         <div className="card p-4 shadow" style={{ width: '30rem' }}>
//             <h3 className="card-title text-center">Register</h3>
//             <div className="card-body">
//               <form onSubmit={(e) => handleSignup(e)}>
//                 <div className="form-group form-label">
//                   <label>Email</label>
//                   <input
//                     type="email"
//                     value={user.email}
//                     className="form-control"
//                     // placeholder="Enter email"
//                     required
//                     onChange={(e) => {
//                       setUser((user) => {
//                         return {
//                           ...user,
//                           email: e.target.value
//                         }
//                       })
//                     }} />
//                 </div>
//                 {/* <div className="form-group form-label">
//                   <label>Password</label>
//                   <input
//                     type="password"
//                     value={user.password}
//                     className="form-control"
//                     // placeholder="Password"
//                     required
//                     onChange={(e) => {
//                       setUser((user) => {
//                         return {
//                           ...user,
//                           password: e.target.value
//                         }
//                       })
//                     }} />
//                 </div> */}
//                 <div className="mb-3">
//                             <label htmlFor="password" className="form-label">Password</label>
//                             <div className="input-group">
//                                 <input
//                                     type={showPassword ? 'text' : 'password'}
//                                     className="form-control"
//                                     id="password"
//                                     value={user.password}
//                                     onChange={(e) => {
//                                       setUser((user) => {
//                                         return {
//                                           ...user,
//                                           password: e.target.value
//                                         }
//                                       })
//                                     }}
//                                     required
//                                 />
//                                 <div className="input-group-append">
//                                     <div
//                                         className="btn btn-outline-secondary"
//                                         onClick={togglePasswordVisibility}
//                                     >
//                                         {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                 <div className="form-group form-label">
//                   <label>Firstname</label>
//                   <input
//                     type="text"
//                     value={user.firstname}
//                     className="form-control"
//                     // placeholder="Enter username"
//                     required
//                     onChange={(e) => {
//                       setUser((user) => {
//                         return {
//                           ...user,
//                           firstname: e.target.value
//                         }
//                       })
//                     }} />
//                 </div>
//                 <div className="form-group form-label">
//                   <label>Lastname</label>
//                   <input
//                     type="text"
//                     value={user.lastname}
//                     className="form-control"
//                     // placeholder="Enter username"
//                     required
//                     onChange={(e) => {
//                       setUser((user) => {
//                         return {
//                           ...user,
//                           lastname: e.target.value
//                         }
//                       })
//                     }} />
//                 </div>

//                 {error && <div className="alert alert-danger">{error}</div>}
//                 <div className="d-grid">
//                   <button
//                     type='submit'
//                     className="btn btn-primary btn-block"
//                     disabled={loading}
//                   >{loading ? 'Signing up...' : 'Sign up'}</button>
//                 </div>
//               </form>
//               </div>
//             </div>
//       </div>
//       <br/><br/><br/>
//     </div>
//   );
// }

// export default RegisterComponent;

import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

function SignUpComponent() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    axios
      .post("http://localhost:5000/user/signup", user)
      .then((res) => {
        console.log(res);
        setLoading(false);
        if (res.status === 201) {
          alert('sign up successful');
          navigate('/login');
        } else {
          setError(res.data.msg || "Signup failed");
        }
      })
      .catch((err) => {
        setLoading(false);
        setError("Error in Signup");
      });
  };

  const styles = {
    container: {
      position: "relative",
      minHeight: "100vh",
      backgroundImage:
        'url("https://www.wilson.edu/sites/default/files/styles/1920_x_1080/public/campus.jpg?itok=6tjXNHDU")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      backdropFilter: "blur(8px)",
      zIndex: 1,
    },
    card: {
      width: "30rem",
      backgroundColor: "#4B0082", // Same color as the carousel background
      color: "#FFFFFF", // White text for contrast
      zIndex: 2,
      padding: "2rem",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
    signupButton: {
      backgroundColor: "#DDA0DD", // Same as the "Get Posts" button color
      color: "white",
      border: "none",
      padding: "0.75rem 1.5rem",
      fontSize: "1.25rem",
      cursor: "pointer",
      borderRadius: "5px",
      transition: "background-color 0.3s ease",
    },
    toggleButton: {
      backgroundColor: "#FFFFFF",
      border: "1px solid #4B0082",
      //borderRadius: '5px',
      //padding: '0.25rem',
      cursor: "pointer",
      color: "#4B0082",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>
      <div className="card p-4 shadow" style={styles.card}>
        <h3 className="card-title text-center">Register</h3>
        <div className="card-body">
          <form onSubmit={(e) => handleSignup(e)}>
            <div className="form-group form-label">
              <label>Email</label>
              <input
                type="email"
                value={user.email}
                className="form-control"
                required
                onChange={(e) => {
                  setUser((user) => ({
                    ...user,
                    email: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  id="password"
                  value={user.password}
                  onChange={(e) => {
                    setUser((user) => ({
                      ...user,
                      password: e.target.value,
                    }));
                  }}
                  required
                />
                <div className="input-group-append">
                  <button
                    type="button"
                    className="btn"
                    style={styles.toggleButton}
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
                  </button>
                </div>
              </div>
            </div>
            <div className="form-group form-label">
              <label>Firstname</label>
              <input
                type="text"
                value={user.firstName}
                className="form-control"
                required
                onChange={(e) => {
                  setUser((user) => ({
                    ...user,
                    firstName: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="form-group form-label">
              <label>Lastname</label>
              <input
                type="text"
                value={user.lastName}
                className="form-control"
                required
                onChange={(e) => {
                  setUser((user) => ({
                    ...user,
                    lastName: e.target.value,
                  }));
                }}
              />
            </div>

            {error && <div className="alert alert-danger">{error}</div>}
            <div className="d-grid">
              <button
                type="submit"
                className="btn"
                style={styles.signupButton}
                disabled={loading}
              >
                {loading ? "Signing up..." : "Sign up"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpComponent;
