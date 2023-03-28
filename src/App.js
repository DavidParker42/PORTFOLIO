import './reset.css';
import './App.css';
import Header from './components/header';
import Aboutme from './components/aboutMe';
import Contact from './components/contact';
import Footer from './components/footer';
import Work from "./components/work";
import { useState } from 'react';



function App() {
  const pages = [{ name: "About Me" }, { name: "Contact" }, { name: "Work" }];
   const [currentpage, setCurrentPage] = useState (pages[0])
  return (
    <div>
      <Header pages={pages} currentpage={currentpage} setCurrentPage={setCurrentPage}/>
      {/* <Aboutme />
      <Contact />
      <Work /> */}
      <Footer />
    </div>
  );
}

export default App;
