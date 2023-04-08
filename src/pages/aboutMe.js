import Navbar from "../components/navbar";
import Footer from "../components/footer";
function AboutMe(props) {
  return (
    <>
    {/* <Navbar/> */}
    <div className="aboutMe">
      <section id="about-me">
        <aside>
          <h3>About Me</h3>
        </aside>

        <p>
          I am a previous special education teacher with 5 years experience
          within a public school setting. I have worked in various different
          environments adapting to rapidly changing situations, working
          collaboratively with others, and meeting deadlines. I have utilized
          the UConn coding bootcamp to expand my skillset and understanding
          within tech.
        </p>
      </section>
    </div>
    <Footer/>
    </>
    
  );
}

export default AboutMe;
