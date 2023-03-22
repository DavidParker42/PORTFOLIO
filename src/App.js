import './reset.css';
import './App.css';
import Header from './components/header';
import Aboutme from './components/aboutMe';
import Contact from './components/contact';
import Footer from './components/footer';
import Work from "./components/work";


function App() {
  return (
    <div>
      <Header />
      <Aboutme />
      <Contact />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
