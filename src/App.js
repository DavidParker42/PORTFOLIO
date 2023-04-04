import './reset.css';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Aboutme from './pages/aboutMe';
import Contact from './pages/contact';
import Footer from './components/Footer';
import Work from "./pages/work";
import { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
import { Routes, Route, Navigate } from "react-router-dom";




export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  // checking to see what the value of 1currentPage` is. Depending on the value of currentPage, we return the corresponding component to render
  const renderPage = () => {
    if (currentPage === 'aboutMe') {
      return <aboutMe />;
    }
    if (currentPage === "Contact") {
      return <contact />;
    }
    if (currentPage === 'Work') {
      return <work />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* passing the currentPage from state and the function to update it */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* calling the renderPage method which will return a component */}
      {renderPage()}
    </div>
  );
}


// function App() {

//   return (
//     <Routes>
//       <Route path="/" element={<Header />} />
//       <Route path="/about" element={<Aboutme />} />
//       <Route path="/contact" element={<Contact />} />
//       <Route path="/work" element={<Work  />} />
//       {/* <Route path='/resume' element={<Resume />}/> */}
//       <Route path="/PORTFOLIO" element={<Navigate replace to="/" />} />
//     </Routes>
//   );
// }

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

// export default App;
