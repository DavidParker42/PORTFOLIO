import Navbar from "./navbar"
function Header(props) {
    return (
      <div>
        <Navbar />
        <header>
          <div class="logo-container">
            <h1>Parker</h1>
            <img src="./images/headshot.png" class="headshot" alt="" />
          </div>
          <nav>
            <ul class="nav-links">
              <li>
                <a href="#about-me">About Me</a>
              </li>
              <li>
                <a href="#work-pics">Work</a>
              </li>
              <li>
                <a href="#contact">Contact Me</a>
              </li>
              <li>
                <a href="./Resume.docx"download>Resume</a>
              </li>
            </ul>
          </nav>
        </header>
        <section class="under-header">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/004/243/021/small/abstract-template-background-white-and-bright-blue-squares-overlapping-with-halftone-and-texture-free-vector.jpg"
            class="lines"
            alt=""
          />
          <div class="bottom-left">David Parker's Portfolio</div>
        </section>
      </div>
    );
}

export default Header
