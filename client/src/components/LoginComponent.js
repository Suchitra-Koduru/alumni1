// import React, { useState } from 'react';
// import { useAuth } from '../providers/AuthProvider';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false);
//     const { loginAction } = useAuth();
//     const navigate = useNavigate();

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError('');

//         try {
//             await loginAction({ email, password });
//             navigate('/'); // Navigate to GetPosts on successful login
//         } catch (err) {
//             setError('Login failed. Please check your credentials.');
//         } finally {
//             setLoading(false);
//         }
//     }

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     return (
//         <div className="vh-100">
//             <br/><br/>
//             <div className="container-fluid d-flex align-items-center justify-content-center h-75">
//                 <div className="card p-4 shadow" style={{ width: '20rem' }}>
//                     <h3 className="card-title text-center">Login</h3>
//                     <form onSubmit={handleLogin}>
//                         <div className="mb-3">
//                             <label htmlFor="email" className="form-label">Email</label>
//                             <input
//                                 type="email"
//                                 className="form-control"
//                                 id="email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         <div className="mb-3">
//                             <label htmlFor="password" className="form-label">Password</label>
//                             <div className="input-group">
//                                 <input
//                                     type={showPassword ? 'text' : 'password'}
//                                     className="form-control"
//                                     id="password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
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
//                         {error && <div className="alert alert-danger">{error}</div>}
//                         <div className="d-grid">
//                             <button type="submit" className="btn btn-primary" disabled={loading}>
//                                 {loading ? 'Logging in...' : 'Login'}
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//             <br/><br/><br/>
//         </div>
//     );
// };

// export default Login;


// import React, { useState } from 'react';
// import { useAuth } from '../providers/AuthProvider';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false);
//     const { loginAction } = useAuth();
//     const navigate = useNavigate();

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError('');

//         try {
//             await loginAction({ email, password });
//             navigate('/'); // Navigate to GetPosts on successful login
//         } catch (err) {
//             setError('Login failed. Please check your credentials.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     const styles = {
//         container: {
//             position: 'relative',
//             minHeight: '100vh',
//             backgroundImage: 'url("https://www.wilson.edu/sites/default/files/styles/1920_x_1080/public/campus.jpg?itok=6tjXNHDU")',
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundRepeat: 'no-repeat',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//         },
//         overlay: {
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundColor: 'rgba(255, 255, 255, 0.5)',
//             backdropFilter: 'blur(8px)',
//             zIndex: 1,
//         },
//         card: {
//             width: '20rem',
//             backgroundColor: '#4B0082', // Same color as the carousel background
//             color: '#FFFFFF', // White text for contrast
//             zIndex: 2,
//             padding: '2rem',
//             borderRadius: '10px',
//             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//         },
//         loginButton: {
//             backgroundColor: '#DDA0DD', // Same as the "Get Posts" button color
//             color: 'white',
//             border: 'none',
//             padding: '0.75rem 1.5rem',
//             fontSize: '1.25rem',
//             cursor: 'pointer',
//             borderRadius: '5px',
//             transition: 'background-color 0.3s ease',
//         },
//         toggleButton: {
//             backgroundColor: 'transparent',
//             border: 'none',
//             color: '#4B0082', // Indigo color
//             cursor: 'pointer',
//         },
//     };

//     return (
//         <div style={styles.container}>
//             <div style={styles.overlay}></div>
//             <div className="card p-4 shadow" style={styles.card}>
//                 <h3 className="card-title text-center">Login</h3>
//                 <form onSubmit={handleLogin}>
//                     <div className="mb-3">
//                         <label htmlFor="email" className="form-label">Email</label>
//                         <input
//                             type="email"
//                             className="form-control"
//                             id="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="password" className="form-label">Password</label>
//                         <div className="input-group">
//                             <input
//                                 type={showPassword ? 'text' : 'password'}
//                                 className="form-control"
//                                 id="password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 required
//                             />
//                             <div className="input-group-append">
//                                 <button
//                                     type="button"
//                                     className="btn btn-outline-secondary"
//                                     onClick={togglePasswordVisibility}
//                                     style={styles.toggleButton}
//                                 >
//                                     {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                     {error && <div className="alert alert-danger">{error}</div>}
//                     <div className="d-grid">
//                         <button
//                             type="submit"
//                             className="btn"
//                             style={styles.loginButton}
//                             disabled={loading}
//                         >
//                             {loading ? 'Logging in...' : 'Login'}
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Login;


import React, { useState } from 'react';
import { useAuth } from '../providers/AuthProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { loginAction } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await loginAction({ email, password });
            navigate('/'); // Navigate to GetPosts on successful login
        } catch (err) {
            setError('Login failed. Please check your credentials.');
        } finally {
            setLoading(false);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const styles = {
        container: {
            position: 'relative',
            minHeight: '100vh',
            backgroundImage: 'url("https://www.wilson.edu/sites/default/files/styles/1920_x_1080/public/campus.jpg?itok=6tjXNHDU")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        overlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            backdropFilter: 'blur(8px)',
            zIndex: 1,
        },
        card: {
            width: '20rem',
            backgroundColor: '#4B0082', // Same color as the carousel background
            color: '#FFFFFF', // White text for contrast
            zIndex: 2,
            padding: '2rem',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        },
        loginButton: {
            backgroundColor: '#DDA0DD', // Same as the "Get Posts" button color
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            fontSize: '1.25rem',
            cursor: 'pointer',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease',
        },
        toggleButton: {
            backgroundColor: '#FFFFFF',
            // border: '1px solid #4B0082',
            //borderRadius: '5px',
            // padding: '0.25rem',
            cursor: 'pointer',
            color: '#4B0082',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.overlay}></div>
            <div className="card p-4 shadow" style={styles.card}>
                <h3 className="card-title text-center">Login</h3>
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <div className="input-group">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <div className="input-group-append">
                                <button
                                    type="button"
                                    className="btn"
                                    onClick={togglePasswordVisibility}
                                    style={styles.toggleButton}
                                >
                                    {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
                                </button>
                            </div>
                        </div>
                    </div>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <div className="d-grid">
                        <button
                            type="submit"
                            className="btn"
                            style={styles.loginButton}
                            disabled={loading}
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
