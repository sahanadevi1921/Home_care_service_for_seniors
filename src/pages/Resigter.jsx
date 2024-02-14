import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Register.css';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobileNumber: '',
  });

  const [touchedFields, setTouchedFields] = useState({});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputBlur = (e) => {
    setTouchedFields({
      ...touchedFields,
      [e.target.name]: true,
    });
  };

  const validateForm = () => {
    const requiredFields = ['name', 'email', 'password', 'confirmPassword', 'mobileNumber'];

    for (const field of requiredFields) {
      if (!formData[field]) {
        // If any required field is empty, return false
        return false;
      }
    }

    // Additional validation logic can be added here

    return true; // All required fields are filled
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isFormValid = validateForm();

    if (isFormValid) {
      try {
        // Make registration request to your Spring Boot backend
        const response = await axios.post('http://localhost:8080/api/v1/auth/register', formData);
        
        // Redirect to the login page upon successful registration
        // You can replace '/login' with the actual path to your login page
        window.location.href = '/Login';
      } catch (error) {
        console.error('Registration failed:', error.response.data.message);
      }
    } else {
      // Form is not valid, handle accordingly (display errors, etc.)
      console.log('Form is not valid. Please fill in all required fields.');
    }
  };

  return (
    <div className="reg-all">
    <div className="register-container">
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
          {touchedFields.name && !formData.name && (
            <small className="text-danger">Username is required</small>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
          {touchedFields.email && !formData.email && (
            <small className="text-danger">Email is required</small>
          )}
          {touchedFields.email &&
            formData.email &&
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && (
              <small className="text-danger">Invalid email format</small>
            )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
          {touchedFields.password && !formData.password && (
            <small className="text-danger">Password is required</small>
          )}
          {touchedFields.password && formData.password.length < 6 && (
            <small className="text-danger">Password must be at least 6 characters</small>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
          {touchedFields.confirmPassword &&
            formData.confirmPassword !== formData.password && (
              <small className="text-danger">Passwords do not match</small>
            )}
        </div>

        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
          {touchedFields.mobileNumber && !formData.mobileNumber && (
            <small className="text-danger">Mobile Number is required</small>
          )}
          {touchedFields.mobileNumber &&
            (formData.mobileNumber.length < 10 || formData.mobileNumber.length > 12) && (
              <small className="text-danger">
                Mobile Number must be between 10 and 12 digits
              </small>
            )}
        </div>

        <button type="submit">Register</button><br></br><br></br>
      </form>

      <p style={{ textAlign: 'center', paddingRight: '50px' }}>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
     </div>
  );
};

export default Register;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../assets/css/Register.css';

// const Register = () => {
//     const [formData, setFormData] = useState({
//         username: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//         mobileNumber: '',
//     });

//     const [touchedFields, setTouchedFields] = useState({});

//     const handleInputChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleInputBlur = (e) => {
//         setTouchedFields({
//             ...touchedFields,
//             [e.target.name]: true,
//         });
//     };

//     const validateForm = () => {
//         const requiredFields = ['username', 'email', 'password', 'confirmPassword', 'mobileNumber'];

//         for (const field of requiredFields) {
//             if (!formData[field]) {
//                 // If any required field is empty, return false
//                 return false;
//             }
//         }

//         // Additional validation logic can be added here

//         return true; // All required fields are filled
//     };


//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const isFormValid = validateForm();

//         if (isFormValid) {
//             // Redirect to the login page
//             // You can replace '/Login' with the actual path to your login page
//             window.location.href = '/Login';
//         } else {
//             // Form is not valid, handle accordingly (display errors, etc.)
//             console.log('Form is not valid. Please fill in all required fields.');
//         }
//     };

//     return (
//         <div className="register-container">
//             <h1>User Registration</h1>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="username">Username:</label>
//                     <input
//                         type="text"
//                         id="username"
//                         name="username"
//                         value={formData.username}
//                         onChange={handleInputChange}
//                         onBlur={handleInputBlur}
//                     />
//                     {touchedFields.username && !formData.username && (
//                         <small className="text-danger">Username is required</small>
//                     )}
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="email">Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         onBlur={handleInputBlur}
//                     />
//                     {touchedFields.email && !formData.email && (
//                         <small className="text-danger">Email is required</small>
//                     )}
//                     {touchedFields.email &&
//                         formData.email &&
//                         !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && (
//                             <small className="text-danger">Invalid email format</small>
//                         )}
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="password">Password:</label>
//                     <input
//                         type="password"
//                         id="password"
//                         name="password"
//                         value={formData.password}
//                         onChange={handleInputChange}
//                         onBlur={handleInputBlur}
//                     />
//                     {touchedFields.password && !formData.password && (
//                         <small className="text-danger">Password is required</small>
//                     )}
//                     {touchedFields.password && formData.password.length < 6 && (
//                         <small className="text-danger">Password must be at least 6 characters</small>
//                     )}
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="confirmPassword">Confirm Password:</label>
//                     <input
//                         type="password"
//                         id="confirmPassword"
//                         name="confirmPassword"
//                         value={formData.confirmPassword}
//                         onChange={handleInputChange}
//                         onBlur={handleInputBlur}
//                     />
//                     {touchedFields.confirmPassword &&
//                         formData.confirmPassword !== formData.password && (
//                             <small className="text-danger">Passwords do not match</small>
//                         )}
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="mobileNumber">Mobile Number:</label>
//                     <input
//                         type="text"
//                         id="mobileNumber"
//                         name="mobileNumber"
//                         value={formData.mobileNumber}
//                         onChange={handleInputChange}
//                         onBlur={handleInputBlur}
//                     />
//                     {touchedFields.mobileNumber && !formData.mobileNumber && (
//                         <small className="text-danger">Mobile Number is required</small>
//                     )}
//                     {touchedFields.mobileNumber &&
//                         (formData.mobileNumber.length < 10 || formData.mobileNumber.length > 12) && (
//                             <small className="text-danger">
//                                 Mobile Number must be between 10 and 12 digits
//                             </small>
//                         )}
//                 </div>

//                 {/* <div className="form-group">
//                     <label htmlFor="userRole">User Role:</label>
//                     <input
//                         type="text"
//                         id="userRole"
//                         name="userRole"
//                         value={formData.userRole}
//                         onChange={handleInputChange}
//                         onBlur={handleInputBlur}
//                     />
//                     {touchedFields.userRole && !formData.userRole && (
//                         <small className="text-danger">User Role is required</small>
//                     )}
//                 </div> */}

//                 <button type="submit">Register</button><br></br><br></br>
//             </form>

//             <p style={{textAlign:'center',paddingRight:'50px'}}>
//                 Already have an account? <Link to="/login">Login here</Link>
//             </p>
//         </div>
//     );
// };

// export default Register;





































































































































































































































































































































































































































































































































































// import React from'react';
// import '../assets/css/Register.css';
// import { Link } from 'react-router-dom';
// function Register(){
//     return(
//         <div className="signup-wrapper">
            
//             <div className="signup-small">
//                <h3>USERNAME</h3> 
//             <input type="username" className="signup-username" ></input>
//             <h3>EMAIL</h3>
//             <input type="email" className="signup-email"></input>
//             <h3>PASSWORD</h3>
//             <input type="password" className="login-password"></input>
//             <h3>CONFIRM PASSWORD</h3>
//             <input type="confirm password" className="signup-con"></input>
//             <Link to ="/Login">
//             <button className="signup-button">SIGNUP</button>
//             </Link>
//             </div>

//         </div>
//     )
// }
// export default Register;
// src/components/Register.jsx
// import React, { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import '../assets/css/Register.css';

// function Register() {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//     });

//     // Access the history object
//     const history = useHistory();

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Add additional validations if needed
//         if (formData.password !== formData.confirmPassword) {
//             console.error('Passwords do not match');
//             return;
//         }

//         // Add logic for handling registration, e.g., API call, state management, etc.
//         console.log('Registration form submitted:', formData);

//         // Redirect to login page after successful registration
//         // You may use history.push('/login') if using react-router history
//         history.push('/login');
//     };

//     return (
//         <div className="register-container">
//             <div className="register-page">
//                 <h1>Create an Account</h1>
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-group">
//                         <label htmlFor="firstName">First Name:</label>
//                         <input
//                             type="text"
//                             id="firstName"
//                             name="firstName"
//                             value={formData.firstName}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>

//                     <div className="form-group">
//                         <label htmlFor="lastName">Last Name:</label>
//                         <input
//                             type="text"
//                             id="lastName"
//                             name="lastName"
//                             value={formData.lastName}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>

//                     <div className="form-group">
//                         <label htmlFor="email">Email:</label>
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>

//                     <div className="form-group">
//                         <label htmlFor="password">Password:</label>
//                         <input
//                             type="password"
//                             id="password"
//                             name="password"
//                             value={formData.password}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>

//                     <div className="form-group">
//                         <label htmlFor="confirmPassword">Confirm Password:</label>
//                         <input
//                             type="password"
//                             id="confirmPassword"
//                             name="confirmPassword"
//                             value={formData.confirmPassword}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>

//                     <button type="submit">Register</button>
//                 </form>

//                 <p>
//                     Already have an account? <Link to="/login">Login</Link>
//                 </p>
//             </div>
//         </div>
//     );
// }

// export default Register;

// RegistrationForm.js
// RegistrationForm.js
// RegistrationForm.js






































// import React, { useState } from 'react';
// import './Register.css';

// const RegistrationForm = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [userRole, setUserRole] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle registration logic here
//   };

//   return (
//     <div className="registration-form">
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="confirmPassword">Confirm Password:</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="mobileNumber">Mobile Number:</label>
//           <input
//             type="tel"
//             id="mobileNumber"
//             value={mobileNumber}
//             onChange={(e) => setMobileNumber(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="userRole">User Role:</label>
//           <input
//             type="text"
//             id="userRole"
//             value={userRole}
//             onChange={(e) => setUserRole(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default RegistrationForm;






























































































































































// // Importing React and useState from React library
// import React, { useState } from 'react';

// // Functional component named RegistrationForm
// const RegistrationForm = () => {
//   // State to manage form data
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     mobileNumber: '',
//     userRole: ''
//   });

//   // State to manage form validation errors
//   const [errors, setErrors] = useState({});

//   // Event handler for input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     // Updating form data using previous data and new value
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   // Event handler for form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Validate the form fields
//     const newErrors = {};
    
//     if (!formData.username) {
//       newErrors.username = 'Username is required';
//     }

//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Invalid email address';
//     }

//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 8) {
//       newErrors.password = 'Password must be at least 8 characters long';
//     }

//     if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }


//     if (!formData.mobileNumber) {
//       newErrors.mobileNumber = 'Mobile number is required';
//     } else if (formData.mobileNumber.length < 10 || formData.mobileNumber.length > 12) {
//       newErrors.mobileNumber = 'Mobile number must be between 10 and 12 digits';
//     }

//     if (!formData.userRole) {
//       newErrors.userRole = 'User role is required';
//     }

//     // Set the validation errors
//     setErrors(newErrors);

//     // If there are no errors, proceed with form submission
//     if (Object.keys(newErrors).length === 0) {
//       // Perform form submission logic here
//       console.log('Form submitted:', formData);
//     }
//   };

//   // JSX structure of the component
//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           name="username"
//           value={formData.username}
//           onChange={handleChange}
//         />
//         {errors.username && <small className="text-danger">{errors.username}</small>}

//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         {errors.email && <small className="text-danger">{errors.email}</small>}

//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//         />
//         {errors.password && <small className="text-danger">{errors.password}</small>}

//         <label htmlFor="confirmPassword">Confirm Password:</label>
//         <input
//           type="password"
//           id="confirmPassword"
//           name="confirmPassword"
//           value={formData.confirmPassword}
//           onChange={handleChange}
//         />
//         {errors.confirmPassword && <small className="text-danger">{errors.confirmPassword}</small>}

//         <label htmlFor="mobileNumber">Mobile Number:</label>
//         <input
//           type="tel"
//           id="mobileNumber"
//           name="mobileNumber"
//           value={formData.mobileNumber}
//           onChange={handleChange}
//         />
//         {errors.mobileNumber && <small className="text-danger">{errors.mobileNumber}</small>}

//         <label htmlFor="userRole">User Role:</label>
//         <input
//           type="text"
//           id="userRole"
//           name="userRole"
//           value={formData.userRole}
//           onChange={handleChange}
//         />
//         {errors.userRole && <small className="text-danger">{errors.userRole}</small>}

//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// // Exporting the RegistrationForm component
// export default RegistrationForm;
