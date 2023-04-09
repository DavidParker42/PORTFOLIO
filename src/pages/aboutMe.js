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
            Full Stack Web Developer with a background in Education and
            life-long dedication to learning. Proficient in mobile and desktop
            development environments. Adept at using JavaScript and other
            programming languages to produce clean code. Well-organized and
            collaborative team player with strong communication and analytical
            abilities. I am currently working as a 
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default AboutMe;
