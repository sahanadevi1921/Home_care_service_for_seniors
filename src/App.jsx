import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Addservice from "./pages/Addservice";
import Viewservice from "./pages/Viewservice";
import AllBooking from "./pages/AllBooking";
import Register from "./pages/Resigter";
import Anavbar from "./pages/Anavbar";
import Alogin from "./pages/Alogin";
import Homepage from "./pages/Homepage";
import BookService from "./pages/BookService";
import HomePages from "./pages/HomePages";
import MyBooking from "./pages/MyBooking";
import Unavbar from "./pages/Unavbar";
import Homes from "./pages/Homes";
import ViewServices from "./pages/ViewServices";
import Contact from "./pages/Contact";
import Aboutas from "./pages/Aboutas";
import Profile from "./pages/Profile";
import Front from "./pages/Front";
import Frame from "./pages/Frame";
import View from "./pages/View";
import Hover from "./pages/Hover";
// import BookingCard from "./pages/BookingCard";
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Navbar" element={<Navbar />} />
    <Route path="/Anavbar" element={<Anavbar />} />
    <Route path="/Unavbar" element={<Unavbar/>}/> 
        <Route path="/Addservice" element={<Addservice />} />
        <Route path="/Viewservice" element={<Viewservice />} />
        <Route path="/AllBooking" element={<AllBooking/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Alogin" element={<Alogin/>}/>
        <Route path="/Homepage" element={<Homepage/>}/>
        <Route path="/BookService" element={<BookService/>}/>
        <Route path="/HomePages" element={<HomePages/>}/>
        <Route path="/MyBooking" element={<MyBooking/>}/>
        <Route path="/Homes" element={<Homes/>}/>
        <Route path="/ViewServices" element={<ViewServices/>}/>
        <Route path="/View" element={<View/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Aboutas" element={<Aboutas/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Front" element={<Front/>}/>
        <Route path="/Frame" element={<Frame/>}/>
        <Route path="/Hover" element={<Hover/>}/>
        {/* <Route path="/BookingCard" element={<BookingCard/>}/> */}
      </Routes>
    </Router>
  );
}
export default App;
















// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
