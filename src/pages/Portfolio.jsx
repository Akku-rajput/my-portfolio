
import "../assets/Portfolio.css";
import { Link } from "react-router-dom";

function Portfolio() {
  const skills = [
    "Core PHP",
    "WordPress",
    "Custom WordPress Themes",
    "Custom WordPress Plugins",
    "WooCommerce",
    "Elementor",
    "Shopify",
    "HTML5",
    "CSS3",
    "JavaScript",
    "jQuery",
    "React.js",
    "Website Speed Optimization",
    "Technical SEO",
    "E-commerce Development",
  ];

  const projects = [
    {
      name: "Bunzl Europe",
      url: "https://www.bunzl.eu/",
      category: "Corporate Website",
      description:
        "Corporate web platform focused on usability, responsive layouts and professional business presentation.",
    },
    {
      name: "Tile & Tools",
      url: "https://www.tilertools.nl",
      category: "E-commerce Website",
      description:
        "E-commerce platform offering tools and products with a user-friendly shopping experience.",
    },
    {
      name: "Techline Products",
      url: "https://www.techlineproducts.eu/",
      category: "Business Website",
      description:
        "Product-focused business website with responsive layouts and structured content.",
    },
    {
      name: "Vrouwen Thrillers",
      url: "https://www.vrouwenthrillers.com/",
      category: "Content Website",
      description:
        "Content-driven website with organized information and an engaging browsing experience.",
    },
    {
      name: "Toonie Tours",
      url: "https://www.toonietours.ca/",
      category: "Travel Website",
      description:
        "Travel and tours platform designed to provide visitors with an accessible browsing experience.",
    },
    {
      name: "Apol Singapore",
      url: "https://apol.sg/",
      category: "Business Website",
      description:
        "Professional business website presenting company information and services.",
    },
    {
      name: "Xianfeng Group",
      url: "https://xianfenggroup.com/",
      category: "Corporate Website",
      description:
        "Corporate website presenting business information and services.",
    },
  ];

  const services = [
    {
      number: "01",
      title: "WordPress Development",
      description:
        "Professional WordPress website development, custom theme development, customization and maintenance.",
    },
    {
      number: "02",
      title: "Custom Plugin Development",
      description:
        "Custom WordPress plugins, functionality development, third-party integrations and feature customization.",
    },
    {
      number: "03",
      title: "Core PHP Development",
      description:
        "PHP-based website development, backend functionality, custom modules and integrations.",
    },
    {
      number: "04",
      title: "WooCommerce Development",
      description:
        "E-commerce website development, store customization and shopping experience improvements.",
    },
    {
      number: "05",
      title: "Elementor & Shopify",
      description:
        "Responsive website layouts, Elementor page building and Shopify theme customization.",
    },
    {
      number: "06",
      title: "Website Optimization",
      description:
        "Website speed optimization, performance improvements and technical SEO.",
    },
  ];

  return (
    <main className="portfolio">

      {/* HERO SECTION */}

      <section className="hero section" id="home">
        <div className="container hero-wrapper">

          <div className="hero-content">

            <p className="section-label">
              HELLO, I'M AKANKSHA SINGH
            </p>

            <h1>
              Senior PHP & <br />
              <span className="gradient-text">
                WordPress Developer.
              </span>
            </h1>

            <p className="hero-description">
              I am a Web Developer with 6 years of
              professional experience specializing in
              Core PHP, WordPress development, custom
              themes, custom plugins and Elementor.

              I build responsive, scalable and
              performance-focused websites and
              e-commerce solutions.
            </p>

            <div className="hero-stats">

              <div className="stat-item">
                <h3>6+</h3>
                <p>Years Experience</p>
              </div>

              <div className="stat-item">
                <h3>7+</h3>
                <p>Website Projects</p>
              </div>

              <div className="stat-item">
                <h3>15+</h3>
                <p>Technical Skills</p>
              </div>

            </div>

            <div className="hero-buttons">

              <a href="#projects" className="btn btn-primary">
                Explore My Work ↗
              </a>

              <Link to="/resume" className="btn btn-outline">
                View My Resume
              </Link>

            </div>

            <p className="availability">
              <span className="availability-dot"></span>
              Open to new career opportunities
            </p>

          </div>

          <div className="hero-image">

            <div className="profile-card">

              <div className="profile-placeholder">
                AS
              </div>

              <h3>Akanksha Singh</h3>

              <p>Senior PHP & WordPress Developer</p>

              <div className="profile-tags">
                <span>PHP</span>
                <span>WordPress</span>
                <span>WooCommerce</span>
              </div>

            </div>

            <div className="floating-badge">
              <strong>6+</strong>
              <span>Years of Experience</span>
            </div>

          </div>

        </div>
      </section>

      {/* ABOUT SECTION */}

      <section className="section" id="about">
        <div className="container">

          <p className="section-label">ABOUT ME</p>

          <h2 className="section-title">
            Building Digital Experiences
            <br />
            <span className="gradient-text">
              That Make an Impact.
            </span>
          </h2>

          <div className="about-content">

            <p className="section-subtitle">
              I am Akanksha Singh, a Web Developer with
              6 years of professional experience in
              developing, customizing and maintaining
              websites using Core PHP, WordPress and
              Shopify.

              My core expertise includes custom
              WordPress theme development, custom
              plugin development, Elementor and
              WooCommerce.

              I enjoy solving technical challenges,
              building functional websites and
              improving website performance.

              My focus is on writing maintainable code
              and delivering responsive, user-friendly
              digital experiences.
            </p>

          </div>

        </div>
      </section>

      {/* SERVICES SECTION */}

      <section className="section" id="services">
        <div className="container">

          <p className="section-label">WHAT I DO</p>

          <h2 className="section-title">
            My Professional Expertise
          </h2>

          <p className="section-subtitle">
            Development solutions backed by practical
            experience and technical knowledge.
          </p>

          <div className="services-grid">

            {services.map((service) => (
              <div className="service-card" key={service.number}>

                <span className="service-number">
                  {service.number}
                </span>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* SKILLS SECTION */}

      <section className="section" id="skills">
        <div className="container">

          <p className="section-label">MY EXPERTISE</p>

          <h2 className="section-title">
            Technical Skills
          </h2>

          <p className="section-subtitle">
            Technologies and tools I work with to
            develop modern websites and web solutions.
          </p>

          <div className="skills-grid">

            {skills.map((skill) => (
              <div className="skill-card" key={skill}>
                <span className="skill-dot"></span>
                {skill}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* PROJECTS SECTION */}

      <section className="section" id="projects">
        <div className="container">

          <p className="section-label">MY WORK</p>

          <h2 className="section-title">
            Featured Projects
          </h2>

          <p className="section-subtitle">
            A selection of live websites from my
            professional development journey.
          </p>

          <div className="projects-grid">

            {projects.map((project, index) => (
              <article className="project-card" key={project.name}>

                <div className="project-top">

                  <span className="project-number">
                    0{index + 1}
                  </span>

                  <span className="project-category">
                    {project.category}
                  </span>

                </div>

                <h3>{project.name}</h3>

                <p>{project.description}</p>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Visit Live Website ↗
                </a>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}

      <section className="contact section" id="contact">
        <div className="container contact-content">

          <p className="section-label">
            LET'S WORK TOGETHER
          </p>

          <h2 className="section-title">
            Looking for a Dedicated
            <br />
            <span className="gradient-text">
              PHP & WordPress Developer?
            </span>
          </h2>

          <p className="section-subtitle">
            I am open to exciting opportunities where
            I can contribute my development experience,
            technical skills and problem-solving
            abilities.
          </p>

          <div className="contact-buttons">

            <a
              href="mailto:as0122592@gmail.com"
              className="btn btn-primary"
            >
              Let's Connect ↗
            </a>

            <Link to="/resume" className="btn btn-outline">
              Download My Resume
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Portfolio;
