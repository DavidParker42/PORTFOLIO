import './reset.css';
import './App.css';
import Header from './components/header';
import Aboutme from './pages/aboutMe';
import Contact from './pages/contact';
import Footer from './components/footer';
import Work from "./pages/work";
import { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
import { Routes, Route, Navigate } from "react-router-dom";



function App() {
  // const [currentPage, setCurrentPage] = useState("home");

  // const changePage = (newPage) => {
  //   setCurrentPage(newPage);
  // };

  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/about" element={<Aboutme />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/work" element={<Work />} />
      {/* <Route path='/resume' element={<Resume />}/> */}
      <Route path="/PORTFOLIO" element={<Navigate replace to="/" />} />
    </Routes>
  );
}

// function App() {
//   const pages = [{ name: "About Me" }, { name: "Contact" }, { name: "Work" }];
//    const [currentpage, setCurrentPage] = useState (pages[0])
//   return (
//     <div>
//       <Header pages={pages} currentpage={currentpage} setCurrentPage={setCurrentPage}/>
//       {/* <Aboutme />
//       <Contact />
//       <Work /> */}
//       <Footer />
//     </div>
//   );
// }

export default App;
