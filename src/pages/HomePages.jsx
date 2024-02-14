// import React, { useState, useEffect } from 'react';
// import '../assets/css/HomePages.css'; // Import the CSS file
// import Unavbar from './Unavbar';

// const HomePages = () => {
//   const [slideIndex, setSlideIndex] = useState(1);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       plusSlides(1);
//     }, 1000); // Change slide every 5 seconds

//     return () => clearInterval(interval);
//   }, [slideIndex]);

//   const plusSlides = (n) => {
//     setSlideIndex((prevIndex) => {
//       let newIndex = prevIndex + n;

//       if (newIndex > slidesData.length) {
//         newIndex = 1;
//       } else if (newIndex < 1) {
//         newIndex = slidesData.length;
//       }

//       return newIndex;
//     });
//   };

//   const currentSlide = (n) => {
//     setSlideIndex(n);
//   };

//   const slidesData = [
//     {
//       src: 'https://nyehealthservices.com/wp-content/uploads/2019/09/Home-Care-Image.jpg',
//       alt: 'Homecare 1',
//     },
//     {
//       src: 'https://furnilly.com/wp-content/uploads/2021/06/Home-Care-Agency.jpg',
//       alt: 'Homecare 2',
//     },
//     {
//       src:
//         'https://www.referah.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dcontain/assets/99/ea/99eab331-f8c5-437f-b8c5-6ed309c162af/WhataretheBestHomecareproviders.jpg',
//       alt: 'Homecare 3',
//     },
//     {
//       src: 'https://haszhomecareservices.co.uk/wp-content/uploads/2022/05/blur.jpg',
//       alt: 'Homecare 4',
//     },
//     {
//       src:
//         'https://img.freepik.com/premium-photo/women-senior-wheelchair-support-nursing-home-house-living-room-wellness-rehabilitation-clinic-portrait-smile-happy-healthcare-nurse-with-retirement-elderly-disability-mobility-aid_590464-130125.jpg?w=996',
//       alt: 'Homecare 5',
//     },
//     {
//       src:
//         'https://www.santecareathome.co.uk/wp-content/uploads/visiting-homecare-services-sante-care-at-home.jpg',
//       alt: 'Homecare 6',
//     },
//   ];

//   return (
//     <>
//       <Unavbar />
//       <div className="container">
//         {slidesData.map((slide, index) => (
//           <div
//             key={index}
//             className={`mySlides ${index + 1 === slideIndex ? 'active' : ''}`}
//           >
//             <div className="numbertext">{`${index + 1} / ${slidesData.length}`}</div>
//             <img src={slide.src} style={{ width: '100%' }} alt={slide.alt} />
//           </div>
//         ))}

//         <a className="prev" onClick={() => plusSlides(-1)}>
//           ❮
//         </a>
//         <a className="next" onClick={() => plusSlides(1)}>
//           ❯
//         </a>

//         <div className="caption-container">
//           <p id="caption"></p>
//         </div>

//         <div className="row">
//           {slidesData.map((slide, index) => (
//             <div key={index} className="column">
//               <img
//                 className={`demo cursor ${index + 1 === slideIndex ? 'active' : ''}`}
//                 src={slide.src}
//                 style={{ width: '100%' }}
//                 onClick={() => currentSlide(index + 1)}
//                 alt={slide.alt}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default HomePages;

// import React from 'react';
// import '../assets/css/HomePages.css'; // Make sure to import your CSS file
// import Unavbar from './Unavbar'; 

// const HomePages = () => {
//   const imageUrls = [
//     'http://www.cahooncare.com/wp-content/uploads/2015/10/iStock_000024221753_Large-e1447179163327-1024x1024.jpg',
//     'https://nyehealthservices.com/wp-content/uploads/2019/09/Home-Care-Image.jpg',
//     'https://innovativehomecare.com/wp-content/uploads/2020/04/being-a-caregiver.jpg',
//     'https://1.bp.blogspot.com/-vlo9KmyruWk/W6mN0rYj44I/AAAAAAAAABc/UuIV_aufhFQbJb_8o0bK6OJ2hdydAu8agCLcBGAs/s1600/How%2Bto%2BFind%2Ba%2BReliable%2BHome%2BCare%2BService.jpg',
//     'https://media.istockphoto.com/id/1315315044/photo/shot-of-a-young-nurse-pushing-a-senior-woman-in-a-wheelchair-in-a-retirement-home.jpg?s=612x612&w=0&k=20&c=fCqD0E4yJiLtPOD0S0EbyKHVl2_-ie5V52m1A_yFJ5o=',
//     'https://media.istockphoto.com/id/478915838/photo/female-caregiver-helping-senior-man-get-up-from-couch.jpg?s=612x612&w=0&k=20&c=sNb5qVyejnhILagcDpax5LdUOMFleqS2eSQpjNzYawQ=',
//     'https://sosonsite.com/wp-content/uploads/2015/10/ElderCare.jpg',
//     'https://cdn-eu.applyflow.site/promedical/prod/wp-content/uploads/2020/12/adobestock_321234420-scaled.jpeg',
//   ];

//   return (
    // <>
    //   <Unavbar />
//       <div>
//         <center>
//           <h2>Homecare Service</h2>
//         </center>
//         <br />
//         <p>Homecare services provide personalized and compassionate support in the
//           comfort of your own home, ensuring individuals receive quality healthcare without the need
//           for hospitalization. From medical assistance to daily chores, these services cater to the
//           unique needs of each individual, promoting a higher quality of life and independence.</p>
//         <div className="image-container">
//           {imageUrls.map((imageUrl, index) => (
//             <div key={index} className="flipImage">
//               <img src={imageUrl} alt={`Image ${index + 1}`} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default HomePages;
// slideshow
import React, { useState, useEffect } from 'react';
import '../assets/css/HomePages.css'; // Import the CSS file
import Unavbar from './Unavbar'; 

const HomePages = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const plusSlides = (n) => {
    setSlideIndex(slideIndex + n);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  const showSlides = (n) => {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("demo");
    const captionText = document.getElementById("caption");

    if (n > slides.length) {
      setSlideIndex(1);
    }
    if (n < 1) {
      setSlideIndex(slides.length);
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
  };

  const slidesData = [
    { src: 'https://nyehealthservices.com/wp-content/uploads/2019/09/Home-Care-Image.jpg', alt: 'Homecare' },
    {  src: 'https://furnilly.com/wp-content/uploads/2021/06/Home-Care-Agency.jpg',alt :'Homecare'},
    { src: 'https://www.referah.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dcontain/assets/99/ea/99eab331-f8c5-437f-b8c5-6ed309c162af/WhataretheBestHomecareproviders.jpg',alt:'Homecare'},
    {src:'https://haszhomecareservices.co.uk/wp-content/uploads/2022/05/blur.jpg',alt:'Homecare'},
    {src:'https://img.freepik.com/premium-photo/women-senior-wheelchair-support-nursing-home-house-living-room-wellness-rehabilitation-clinic-portrait-smile-happy-healthcare-nurse-with-retirement-elderly-disability-mobility-aid_590464-130125.jpg?w=996',alt:'Homecare'},
    {src:'https://www.santecareathome.co.uk/wp-content/uploads/visiting-homecare-services-sante-care-at-home.jpg',alt:'Homecare'}

    // Add other image URLs with alt text
  ];

  return (
    <>
     <Unavbar />
    <div className="container">
      {slidesData.map((slide, index) => (
        <div key={index} className="mySlides">
          <div className="numbertext">{`${index + 1} / ${slidesData.length}`}</div>
          <img src={slide.src} style={{ width: '100%' }} alt={slide.alt} />
        </div>
      ))}

      <a className="prev" onClick={() => plusSlides(-1)}>
        ❮
      </a>
      <a className="next" onClick={() => plusSlides(1)}>
        ❯
      </a>

      <div className="caption-container">
        <p id="caption"></p>
      </div>

      <div className="row">
        {slidesData.map((slide, index) => (
          <div key={index} className="column">
            <img
              className={`demo cursor ${index + 1 === slideIndex ? 'active' : ''}`}
              src={slide.src}
              style={{ width: '100%' }}
              onClick={() => currentSlide(index + 1)}
              alt={slide.alt}
            />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default HomePages;


// import React from 'react';
// import '../assets/css/HomePages.css'; // Import the CSS file

// class ImageSlider extends React.Component {
//   render() {
//     return (
//       <div>
//         <div className="https://nyehealthservices.com/wp-content/uploads/2019/09/Home-Care-Image.jpg"></div>
//         <div className="bg-image img2"></div>
//         <div className="bg-image img3"></div>
//         <div className="bg-image img4"></div>
//         <div className="bg-image img5"></div>
//         <div className="bg-image img6"></div>

//         <div className="bg-text">Homecare service</div>
//       </div>
//     );
//   }
// }

// export default ImageSlider;



































































































































// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../assets/css/HomePages.css';

// import Unavbar from './Unavbar';
// function HomePages() {
//     return (
//         <>
//         <Unavbar/>
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

// export default HomePages;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../assets/css/HomePages.css'; 
// import Unavbar from './Unavbar'; 
// const HomePages = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <>
//     <Unavbar/>
//     <div className="container" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
//       <img src={"https://cdn1.vectorstock.com/i/1000x1000/04/50/home-care-logo-vector-14000450.jpg"} alt="Avatar" className="image" />
//       <div className={`overlay ${isHovered ? 'hovered' : ''}`}>
//         <div className="text">homecare</div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default HomePages;

// import React from 'react';
// import '../assets/css/HomePages.css'; // Make sure to import your CSS file
// import Unavbar from './Unavbar'; 
// const HomePages = () => {
//   const imageUrls = [
//     'http://www.cahooncare.com/wp-content/uploads/2015/10/iStock_000024221753_Large-e1447179163327-1024x1024.jpg',
//     'https://nyehealthservices.com/wp-content/uploads/2019/09/Home-Care-Image.jpg', // Add more image URLs as needed
//     'https://innovativehomecare.com/wp-content/uploads/2020/04/being-a-caregiver.jpg',
//     'https://1.bp.blogspot.com/-vlo9KmyruWk/W6mN0rYj44I/AAAAAAAAABc/UuIV_aufhFQbJb_8o0bK6OJ2hdydAu8agCLcBGAs/s1600/How%2Bto%2BFind%2Ba%2BReliable%2BHome%2BCare%2BService.jpg',
//     'https://media.istockphoto.com/id/1315315044/photo/shot-of-a-young-nurse-pushing-a-senior-woman-in-a-wheelchair-in-a-retirement-home.jpg?s=612x612&w=0&k=20&c=fCqD0E4yJiLtPOD0S0EbyKHVl2_-ie5V52m1A_yFJ5o=',
//     'https://media.istockphoto.com/id/478915838/photo/female-caregiver-helping-senior-man-get-up-from-couch.jpg?s=612x612&w=0&k=20&c=sNb5qVyejnhILagcDpax5LdUOMFleqS2eSQpjNzYawQ=',

//   ];

//   return (
//     <>
//      <Unavbar/>
//     <div>
//         <center>
//       <h2>Homecare Service</h2>
//       </center>
//       <br></br>
//       <p>Homecare services provide personalized and compassionate support in the
//          comfort of your own home, ensuring individuals receive quality healthcare without the need 
//          for hospitalization. From medical assistance to daily chores, these services cater to the 
//          unique needs of each individual, promoting a higher quality of life and independence.</p>
//       {imageUrls.map((imageUrl, index) => (
//         <img key={index} src={imageUrl} alt={`Image ${index + 1}`} className="flipImage" />
//       ))}
//     </div>
//     </>
//   );
// };

// export default HomePages;
// image space code
// import React from 'react';
// import '../assets/css/HomePages.css'; // Make sure to import your CSS file
// import Unavbar from './Unavbar'; 

// const HomePages = () => {
//   const imageUrls = [
//     'http://www.cahooncare.com/wp-content/uploads/2015/10/iStock_000024221753_Large-e1447179163327-1024x1024.jpg',
//     'https://nyehealthservices.com/wp-content/uploads/2019/09/Home-Care-Image.jpg', // Add more image URLs as needed
//     'https://innovativehomecare.com/wp-content/uploads/2020/04/being-a-caregiver.jpg',
//     'https://1.bp.blogspot.com/-vlo9KmyruWk/W6mN0rYj44I/AAAAAAAAABc/UuIV_aufhFQbJb_8o0bK6OJ2hdydAu8agCLcBGAs/s1600/How%2Bto%2BFind%2Ba%2BReliable%2BHome%2BCare%2BService.jpg',
//     'https://media.istockphoto.com/id/1315315044/photo/shot-of-a-young-nurse-pushing-a-senior-woman-in-a-wheelchair-in-a-retirement-home.jpg?s=612x612&w=0&k=20&c=fCqD0E4yJiLtPOD0S0EbyKHVl2_-ie5V52m1A_yFJ5o=',
//     'https://media.istockphoto.com/id/478915838/photo/female-caregiver-helping-senior-man-get-up-from-couch.jpg?s=612x612&w=0&k=20&c=sNb5qVyejnhILagcDpax5LdUOMFleqS2eSQpjNzYawQ=',
//   ];

//   return (
//     <>
//       <Unavbar />
//       <div>
//         <center>
//           <h2>Homecare Service</h2>
//         </center>
//         <br />
//         <p>Homecare services provide personalized and compassionate support in the
//           comfort of your own home, ensuring individuals receive quality healthcare without the need
//           for hospitalization. From medical assistance to daily chores, these services cater to the
//           unique needs of each individual, promoting a higher quality of life and independence.</p>
//         <div className="image-container">
//           {imageUrls.map((imageUrl, index) => (
//             <React.Fragment key={index}>
//               <img src={imageUrl} alt={`Image ${index + 1}`} className="flipImage" />
//               {index < imageUrls.length - 1 && <div className="image-spacing"></div>}
//             </React.Fragment>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default HomePages;