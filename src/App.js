import './reset.css';
import './App.css';
import Header from './components/header';
import Aboutme from './components/aboutMe';
import Contact from './components/contact';
import Footer from './components/footer';
import Work from "./components/work";
import { useState } from 'react';



function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const changePage = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <Navbar changePage={changePage} />
      {currentPage === "home" && <Home />}
      {currentPage === "about" && <About />}
      {currentPage === "contact" && <Contact />}
    </div>
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
