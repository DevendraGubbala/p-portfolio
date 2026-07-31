import "../../css/About.css";
import { FaCode, FaLaptopCode, FaGraduationCap } from "react-icons/fa";

function About() {
  return (
<section className="about" id="about">
      <div className="about-title">
        <h4>ABOUT ME</h4>
        <h1>Know More About Me</h1>
      </div>

      <div className="about-container">

        <div className="about-left">

          <h2>I'm Devendra</h2>

          <h3>Java Full Stack Developer</h3>

          <p>
            I'm a passionate Java Full Stack Developer specializing in
            React JS, Spring Boot and MySQL. I enjoy building responsive,
            scalable and user-friendly web applications that solve real
            business problems.
          </p>

          <div className="skills-list">

            <div>
              <FaCode />
              <span>React JS</span>
            </div>

            <div>
              <FaLaptopCode />
              <span>Spring Boot</span>
            </div>

            <div>
              <FaGraduationCap />
              <span>MySQL</span>
            </div>

            <div>
              <FaCode />
              <span>REST APIs</span>
            </div>

          </div>

          <button className="about-btn">
            Download CV
          </button>

        </div>

        <div className="about-right">

          <div className="about-card">
            <h1>10+</h1>
            <p>Projects Completed</p>
          </div>

          <div className="about-card">
            <h1>1+</h1>
            <p>Years Learning</p>
          </div>

          <div className="about-card">
            <h1>100%</h1>
            <p>Client Satisfaction</p>
          </div>

          <div className="about-card">
            <h1>24/7</h1>
            <p>Support</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;