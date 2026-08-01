import "../../CSS/Skills.css";

import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiJavascript,
  SiFirebase
} from "react-icons/si";

function Skills() {

  const skills = [
    { icon: <FaJava />, name: "Java" },
    { icon: <SiSpringboot />, name: "Spring Boot" },
    { icon: <FaReact />, name: "React JS" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <FaGitAlt />, name: "Git & GitHub" },
    { icon: <SiFirebase />, name: "Firebase" }
  ];

  return (
<section className="skills" id="skills">
        <div className="skills-title">
        <h4>MY SKILLS</h4>
        <h1>Technologies I Work With</h1>
      </div>

      <div className="skills-container">

        {skills.map((skill, index) => (

          <div className="skill-card" key={index}>

            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;