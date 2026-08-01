import "../../CSS/Services.css";

import {
  FaLaptopCode,
  FaCode,
  FaServer,
  FaDatabase,
  FaMobileAlt,
  FaTools
} from "react-icons/fa";

function Services() {

  const services = [

    {
      icon: <FaLaptopCode />,
      title: "Full Stack Development",
      desc: "Modern web applications using React JS, Spring Boot and MySQL."
    },

    {
      icon: <FaCode />,
      title: "Frontend Development",
      desc: "Responsive, interactive and beautiful websites using React JS."
    },

    {
      icon: <FaServer />,
      title: "Backend Development",
      desc: "Secure REST APIs with Spring Boot, Java and authentication."
    },

    {
      icon: <FaDatabase />,
      title: "Database Design",
      desc: "Efficient MySQL database design, optimization and integration."
    },

    {
      icon: <FaMobileAlt />,
      title: "Responsive Design",
      desc: "Mobile-friendly websites that work perfectly on all devices."
    },

    {
      icon: <FaTools />,
      title: "Bug Fixing",
      desc: "Fix Java, React, Spring Boot and database related issues quickly."
    }

  ];

  return (

<section className="services" id="services">
      <div className="services-title">

        <h4>MY SERVICES</h4>

        <h1>What I Can Do For You</h1>

      </div>

      <div className="services-container">

        {services.map((service, index) => (

          <div className="service-card" key={index}>

            <div className="service-icon">
              {service.icon}
            </div>

            <h2>{service.title}</h2>

            <p>{service.desc}</p>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Services;