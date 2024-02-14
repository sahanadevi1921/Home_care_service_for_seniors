// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../assets/css/Homes.css';
// import Navbar from './Navbar';
// function Homes() {
//     return (
//         <>
//         <Navbar/>
//         <div className="home-page">
//             <h1>Welcome to Our Website</h1>
//             {/* <p>Explore our services and book an appointment today!</p> */}

//             {/* <div className="cta-buttons">
//                 <Link to="/services">
//                     <button className="explore-button">Explore Services</button>
//                 </Link>
//                 <Link to="/bookings">
//                     <button className="book-now-button">Book Now</button>
//                 </Link>
//             </div> */}
//         </div>
//         </>
//     );
// }

// export default Homes;

import React from 'react';
import '../assets/css/Homes.css'; // Make sure to import your CSS file 
import Navbar from './Navbar';

const Homes = () => {
  const imageUrls = [
    'http://www.cahooncare.com/wp-content/uploads/2015/10/iStock_000024221753_Large-e1447179163327-1024x1024.jpg',
    'https://nyehealthservices.com/wp-content/uploads/2019/09/Home-Care-Image.jpg',
    'https://innovativehomecare.com/wp-content/uploads/2020/04/being-a-caregiver.jpg',
    'https://1.bp.blogspot.com/-vlo9KmyruWk/W6mN0rYj44I/AAAAAAAAABc/UuIV_aufhFQbJb_8o0bK6OJ2hdydAu8agCLcBGAs/s1600/How%2Bto%2BFind%2Ba%2BReliable%2BHome%2BCare%2BService.jpg',
    'https://media.istockphoto.com/id/1315315044/photo/shot-of-a-young-nurse-pushing-a-senior-woman-in-a-wheelchair-in-a-retirement-home.jpg?s=612x612&w=0&k=20&c=fCqD0E4yJiLtPOD0S0EbyKHVl2_-ie5V52m1A_yFJ5o=',
    'https://media.istockphoto.com/id/478915838/photo/female-caregiver-helping-senior-man-get-up-from-couch.jpg?s=612x612&w=0&k=20&c=sNb5qVyejnhILagcDpax5LdUOMFleqS2eSQpjNzYawQ=',
    'https://sosonsite.com/wp-content/uploads/2015/10/ElderCare.jpg',
    'https://cdn-eu.applyflow.site/promedical/prod/wp-content/uploads/2020/12/adobestock_321234420-scaled.jpeg',
  ];

  return (
    <>
      <Navbar />
      <div>
        <center>
          <h2>Homecare Service</h2>
        </center>
        <br />
        <p>Homecare services provide personalized and compassionate support in the
          comfort of your own home, ensuring individuals receive quality healthcare without the need
          for hospitalization. From medical assistance to daily chores, these services cater to the
          unique needs of each individual, promoting a higher quality of life and independence.</p>
        <div className="image-container">
          {imageUrls.map((imageUrl, index) => (
            <div key={index} className="flipImage">
              <img src={imageUrl} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Homes;
