import "../../CSS/projects.css";

function Projects() {

  const projects = [

  {
    title: "Coffee Shop Management System",
    tech: "HTML • CSS • JavaScript • Node.js • Express.js • MySQL",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200",
    description:
      "A full-stack coffee shop web application with secure authentication, product management, shopping cart, order history, responsive UI and MySQL database integration.",

    github: "https://github.com/DevendraGubbala/Coffee-Shop-Management-System",
live: "https://coffee-shop-demo.vercel.app"
  },

  {
    title: "Digital Memory House",
    tech: "React JS • Spring Boot • MySQL",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
    description:
      "A modern digital platform to securely store, organize and manage personal memories using React JS, Spring Boot REST APIs and MySQL with a clean responsive interface.",

    github: "https://github.com/DevendraGubbala/Digital-Memory-House",
live: "https://digital-memory-house.vercel.app"
  }

];

  return (

<section className="projects" id="projects">
      <div className="projects-title">

        <h4>MY PROJECTS</h4>

        <h1>Featured Projects</h1>

      </div>

      <div className="projects-container">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <img src={project.image} alt={project.title} />

            <div className="project-content">

              <h2>{project.title}</h2>

              <h4>{project.tech}</h4>

              <p>{project.description}</p>

              <div className="project-buttons">

  <a
    href={project.live}
    target="_blank"
    rel="noopener noreferrer"
    className="project-btn"
  >
    Live Demo
  </a>

  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="project-btn"
  >
    GitHub
  </a>

</div>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Projects;