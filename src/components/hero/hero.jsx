import "../../css/Hero.css";
import profile from "../../assets/images/profile.jpeg";

function Hero() {
  return (
<section className="hero" id="home">
      <div className="hero-left">

        <p className="hello">👋 Hello, I'm</p>

        <h1>
          Dev<span>endra</span>
        </h1>

        <h2>Full Stack Web Developer</h2>
        <p className="description">
  I build fast, responsive and scalable web applications using
  <strong> React JS, Spring Boot and MySQL.</strong>

  <br /><br />

  I help startups, businesses and entrepreneurs transform ideas into
  modern digital products with clean UI, secure backend and optimized
  performance.
</p>

        <div className="hero-buttons">
           <a href="#contact" className="btn1">
            Hire Me
             </a>      
          <a
            href="/resume.pdf"
            download
            className="btn2"
            >
             Download Resume
          </a>        
        </div>

      </div>

      <div className="hero-right">

        <div className="circle">

          <img
            src={profile}
            alt="Devendra"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;