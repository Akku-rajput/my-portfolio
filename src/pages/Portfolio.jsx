
import "../assets/Portfolio.css";
import { Link } from "react-router-dom";


function Portfolio() {
  const skills = [
    "WordPress",
    "Shopify",
    "PHP",
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
        "Professional corporate web platform with a focus on usability and performance.",
    },
    {
      name: "Tile & Tools",
      url: "https://www.tilertools.nl",
      category: "E-commerce Website",
      description:
        "E-commerce website providing tools and products with a user-friendly shopping experience.",
    },
    {
      name: "Techline Products",
      url: "https://www.techlineproducts.eu/",
      category: "Business Website",
      description:
        "Product-focused website with responsive layouts and structured content.",
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
        "Travel and tour website designed to provide visitors with an accessible experience.",
    },
    {
      name: "Apol Singapore",
      url: "https://apol.sg/",
      category: "Business Website",
      description:
        "Business website with a professional online presence.",
    },
    {
      name: "Xianfeng Group",
      url: "https://xianfenggroup.com/",
      category: "Corporate Website",
      description:
        "Corporate website presenting business information and services.",
    },
  ];

  return (
    <div className="portfolio">

      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="hero-content">

          <p className="intro">
            HELLO, I'M AKANKSHA SINGH
          </p>

          <h1>
            Sr. Web Developer
            <span> & WordPress / Shopify Expert.</span>
          </h1>

          <p className="hero-description">
            I am a Web Developer with 6+ years of
            professional experience in WordPress,
            Shopify, PHP and modern web technologies.
            I specialize in building responsive websites,
            e-commerce platforms, website speed
            optimization and technical SEO.
          </p>

          <div className="hero-stats">
            <div>
              <h3>6+</h3>
              <p>Years Experience</p>
            </div>

            <div>
              <h3>7+</h3>
              <p>Live Projects</p>
            </div>

            <div>
              <h3>SEO</h3>
              <p>Technical Knowledge</p>
            </div>
          </div>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              Explore My Work
            </a>

            <Link to="/resume" className="outline-btn">
              View My Resume
            </Link>
          </div>

        </div>

        <div className="hero-image">
          <div className="profile-placeholder">
            AS
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about section" id="about">

        <p className="section-label">
          ABOUT ME
        </p>

        <h2>
          Creating powerful websites
          with performance and purpose.
        </h2>

        <p>
          I am Akanksha Singh, a professional Web
          Developer with 6+ years of experience in
          developing, customizing and maintaining
          websites using WordPress, Shopify and PHP.

          I have experience working on corporate
          websites, e-commerce platforms and
          content-driven websites.

          Along with development, I focus on website
          speed optimization, responsive design,
          performance improvements and technical SEO
          to create user-friendly and search-engine-
          friendly websites.
        </p>

      </section>

      {/* SERVICES */}
      <section className="section" id="services">

        <p className="section-label">
          WHAT I DO
        </p>

        <h2>
          My Professional Expertise
        </h2>

        <div className="services-grid">

          <div className="service-card">
            <h3>WordPress Development</h3>
            <p>
              Custom WordPress websites, theme
              customization, plugin integration
              and website maintenance.
            </p>
          </div>

          <div className="service-card">
            <h3>Shopify Development</h3>
            <p>
              Shopify store development, theme
              customization, e-commerce features
              and store management.
            </p>
          </div>

          <div className="service-card">
            <h3>PHP Development</h3>
            <p>
              PHP development, backend functionality,
              website customization and integrations.
            </p>
          </div>

          <div className="service-card">
            <h3>Speed Optimization</h3>
            <p>
              Website performance improvements,
              loading speed optimization and
              Core Web Vitals enhancements.
            </p>
          </div>

          <div className="service-card">
            <h3>Technical SEO</h3>
            <p>
              Technical SEO knowledge including
              website structure, indexing, metadata,
              crawlability and performance.
            </p>
          </div>


        </div>

      </section>

      {/* SKILLS SECTION */}
      <section className="section" id="skills">

        <p className="section-label">
          MY EXPERTISE
        </p>

        <h2>
          Technical Skills
        </h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill}>
              {skill}
            </div>
          ))}
        </div>

      </section>

      {/* PROJECT SECTION */}
      <section className="section" id="projects">

        <p className="section-label">
          MY WORK
        </p>

        <h2>
          Featured Projects
        </h2>

        <p className="project-intro">
          Here are some of the live websites I have
          worked on during my professional journey.
        </p>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <div className="project-number">
                0{index + 1}
              </div>

              <span className="project-category">
                {project.category}
              </span>

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

            </div>
          ))}

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section className="contact section" id="contact">

        <p className="section-label">
          LET'S WORK TOGETHER
        </p>

        <h2>
          Have a project in mind?
          Let's build something great.
        </h2>

        <p>
          I am always interested in working on
          exciting web development projects and
          creating high-performance websites.
        </p>

        <a
          href="mailto:as0122592@gmail.com"
          className="primary-btn"
        >
          Contact Me
        </a>

      </section>

    </div>
  );
}

export default Portfolio;
