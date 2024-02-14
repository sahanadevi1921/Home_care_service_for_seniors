// import React from 'react'
// import '../assets/css/Login.css'
// import { Link } from 'react-router-dom';

// function Alogin(){
//     return (
//         <div className='signin-all'>
//         <div className='signin-container'>
//         <h1 >Login</h1>
//         <div className='signin-fields'>
//                 <input type='email' placeholder='Email Address'/><br/><br/>
//                 <input type='password' placeholder='Password'/><br/><br/>
//                 <Link to="/Anavbar">
//                 <button>LOGIN</button><br></br><br></br>
//                 </Link>
//             </div>
//         </div>
//     </div> );
// }
// export default Alogin
// Login.jsx

// Login.jsx

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../assets/css/Login.css';

// const Alogin = ({ onLoginSuccess }) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate =useNavigate();

//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//     };

//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//     };

//     const handleLogin = () => {
//         // Perform validation (add more validation logic as needed)
//         if (!email || !password) {
//             setError('Please enter both email and password.');
//             return;
//         }

//         // Simulate login (replace with actual authentication logic)
//         if (isValidEmail(email) && isValidPassword(password)) {
//             // Call the callback function from the parent component if needed
//             if (onLoginSuccess) {
//                 onLoginSuccess();
//             }
//             // Set the redirect state to true
//             navigate('/Homepage');
//         } else {
//             setError('Invalid email or password. Please try again.');
//         }
//     };

//     const isValidEmail = (email) => {
//         // Add email validation logic here
//         const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

//         if (!isValid) {
//             setError('Invalid email format. Please enter a valid email address.');
//         } else {
//             setError(''); // Clear the error message if the email is valid
//         }
//         return true;
//     };

//     const isValidPassword = (password) => {
//         // Add password validation logic here
//         return true;
//     };

   

//     return (
//         <div className='signin-all'>
//             <div className='signin-container'>
//                 <h1>Login</h1>
//                 <div className='signin-fields'>
//                     <input type='email' placeholder='Email Address' value={email} onChange={handleEmailChange} /><br /><br />
//                     <input type='password' placeholder='Password' value={password} onChange={handlePasswordChange} /><br /><br />
//                     <button onClick={handleLogin}>LOGIN</button><br /><br />
//                     {error && <p className="error-message">{error}</p>}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Alogin;

// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import '../assets/css/Login.css';

// const Alogin = ({ onLoginSuccess }) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//     };

//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//     };

//     const handleLogin = () => {
//         // Perform validation (add more validation logic as needed)
//         if (!email || !password) {
//             setError('Please enter both email and password.');
//             return;
//         }

//         // Simulate login (replace with actual authentication logic)
//         if (isValidEmail(email) && isValidPassword(password)) {
//             // Call the callback function from the parent component if needed
//             if (onLoginSuccess) {
//                 onLoginSuccess();
//             }
//             // Set the redirect state to true
//             navigate('/Homepage');
//         } else {
//             setError('Invalid email or password. Please try again.');
//         }
//     };

//     const isValidEmail = (email) => {
//         // Add email validation logic here
//         const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

//         if (!isValid) {
//             setError('Invalid email format. Please enter a valid email address.');
//         } else {
//             setError(''); // Clear the error message if the email is valid
//         }

//         return isValid;
//     };

//     const isValidPassword = (password) => {
//         // Add password validation logic here
//         return true;
//     };

//     return (
//         <div className='signin-all'>
//             <div className='signin-container'>
//                 <h1>Login</h1>
//                 <div className='signin-fields'>
//                     <input type='email' placeholder='Email Address' value={email} onChange={handleEmailChange} /><br /><br />
//                     <input type='password' placeholder='Password' value={password} onChange={handlePasswordChange} /><br /><br />
//                     <button onClick={handleLogin}>LOGIN</button><br /><br />
//                     <Link to="/Register"> <p style={{ textAlign: 'center', paddingRight: '50px' }}>New User? Register</p></Link>
//                     {error && <p className="error-message">{error}</p>}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Alogin;

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';  // Import Axios
import '../assets/css/Login.css';

const Alogin = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async () => {
        try {
            // Perform validation (add more validation logic as needed)
            if (!email || !password) {
                setError('Please enter both email and password.');
                return;
            }

            // Make a POST request to the login endpoint using Axios
            const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
                email,
                password,
            });

            // Assuming the backend returns a token upon successful login
            const token = response.data.token;
            const role = response.data.role; // Assuming your backend includes role information in the response

            // Check if the user is an admin
            if (role === 'ADMIN') {
                localStorage.setItem('token', token);
                // Call the callback function from the parent component if needed
                if (onLoginSuccess) {
                    onLoginSuccess(token);
                }

                // Set the redirect state to true for admin
                navigate('/Homepage');
            } else {
                setError('Invalid credentials. Please try again.');
            }
        } catch (error) {
            setError('Invalid email or password. Please try again.');
        }
    };

    // Add your validation functions here

    return (
        <div className='signin-all'>
            <div className='signin-container'>
                <h1>Login</h1>
                <div className='signin-fields'>
                    <input type='email' placeholder='Email Address' value={email} onChange={handleEmailChange} /><br /><br />
                    <input type='password' placeholder='Password' value={password} onChange={handlePasswordChange} /><br /><br />
                    <button onClick={handleLogin}>LOGIN</button><br /><br />
                    <Link to="/Register"> <p style={{ textAlign: 'center', paddingRight: '50px' }}>New User? Register</p></Link>
                    {error && <p className="error-message">{error}</p>}
                </div>
            </div>
        </div>
    );
};

export default Alogin;

