
import React, { useState } from 'react';
import '../assets/css/Aboutus.css';
import Anavbar from './Anavbar';

const Aboutas = () => {
  const [isEditMode, setEditMode] = useState(false);
  const [content, setContent] = useState({
    heading: 'About Us',
    paragraph1:
      "Welcome to our Home Care Service! We are dedicated to providing high-quality and compassionate care for individuals in the comfort of their homes. Our team of skilled professionals is committed to enhancing the well-being and independence of our clients.",
    paragraph2:
      "At Home Care Service, we understand the importance of personalized care. Whether it's assistance with daily activities, medication management, or companionship, our caregivers are here to support you and your loved ones.",
    paragraph3:
      "Our mission is to create a safe and nurturing environment that promotes the overall health and happiness of those we serve. We value the trust our clients place in us, and we strive to exceed expectations through reliable and compassionate care.",
  });

  const handleEditClick = () => {
    setEditMode(!isEditMode);
  };

  const handleSaveClick = () => {
    // Add logic to save the edited content
    setEditMode(false);
    // Additional logic can be added here, such as sending the updated content to a server.
  };

  return (
    <>
    <Anavbar/>
    <div className="about-us-page">
      <h1>{content.heading}</h1>
      {isEditMode ? (
        <>
          <textarea
            value={content.paragraph1}
            onChange={(e) => setContent({ ...content, paragraph1: e.target.value })}
          ></textarea>
          <textarea
            value={content.paragraph2}
            onChange={(e) => setContent({ ...content, paragraph2: e.target.value })}
          ></textarea>
          <textarea
            value={content.paragraph3}
            onChange={(e) => setContent({ ...content, paragraph3: e.target.value })}
          ></textarea>
          <button onClick={handleSaveClick}>Save</button>
        </>
      ) : (
        <>
          <p>{content.paragraph1}</p>
          <p>{content.paragraph2}</p>
          <p>{content.paragraph3}</p>
          <button onClick={handleEditClick}>Edit</button>
        </>
      )}
    </div>
    </>
  );
};

export default Aboutas;






// import React from 'react';
// import '../assets/css/Aboutus.css';
// import Anavbar from './Anavbar';
// import { Link } from "react-router-dom";
// const Aboutas = () => {
//   return (
//     <>
//     <Anavbar/>
//     <div className="about-us-page">
//       <h1>About Us</h1>
//       <p>
//         Welcome to our Home Care Service! We are dedicated to providing high-quality and compassionate
//         care for individuals in the comfort of their homes. Our team of skilled professionals is committed
//         to enhancing the well-being and independence of our clients.
//       </p>
//       <p>
//         At Home Care Service, we understand the importance of personalized care. Whether it's assistance
//         with daily activities, medication management, or companionship, our caregivers are here to support
//         you and your loved ones.
//       </p>
//       <p>
//         Our mission is to create a safe and nurturing environment that promotes the overall health and happiness
//         of those we serve. We value the trust our clients place in us, and we strive to exceed expectations
//         through reliable and compassionate care.
//       </p>
//     </div>
    
// </>
//   );
// };

// export default Aboutas;

