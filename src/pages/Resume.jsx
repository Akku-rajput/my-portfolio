
import "../assets/Portfolio.css";

function Resume() {
  const skills = [
    "Core PHP",
    "WordPress Development",
    "Custom WordPress Themes",
    "Custom WordPress Plugins",
    "Elementor",
    "WooCommerce",
    "Shopify Development",
    "HTML5",
    "CSS3",
    "JavaScript",
    "jQuery",
    "React.js",
    "MySQL",
    "Responsive Web Design",
    "Website Speed Optimization",
    "Technical SEO",
  ];

  const projects = [
    {
      name: "Bunzl Europe",
      url: "https://www.bunzl.eu/",
    },
    {
      name: "Tile & Tools",
      url: "https://www.tilertools.nl/",
    },
    {
      name: "Techline Products",
      url: "https://www.techlineproducts.eu/",
    },
    {
      name: "Vrouwen Thrillers",
      url: "https://www.vrouwenthrillers.com/",
    },
    {
      name: "Toonie Tours",
      url: "https://www.toonietours.ca/",
    },
    {
      name: "Apol Singapore",
      url: "https://apol.sg/",
    },
    {
      name: "Xianfeng Group",
      url: "https://xianfenggroup.com/",
    },
  ];

  const expertise = [
    "Core PHP development and backend customization.",
    "Custom WordPress theme development and customization.",
    "Custom WordPress plugin development.",
    "Elementor website development and customization.",
    "WooCommerce functionality and e-commerce development.",
    "Shopify theme customization and store development.",
    "MySQL database integration and management.",
    "Website maintenance, debugging and troubleshooting.",
    "Responsive website development for all screen sizes.",
    "Website speed and performance optimization.",
  ];

  return (
    <main className="resume-wrapper">

      <div className="resume-page">

        {/* HEADER */}

        <header className="resume-header">

          <p className="resume-kicker">
            PROFESSIONAL RESUME
          </p>

          <h1>Akanksha Singh</h1>

          <h2>
            Senior PHP & WordPress Developer
          </h2>

          <p className="resume-experience">
            6 Years of Professional Experience
          </p>

          <div className="resume-contact">

            <a href="tel:+918299153078">
              +91 8299153078
            </a>

            <a href="mailto:as0122592@gmail.com">
              as0122592@gmail.com
            </a>

            <a
              href="https://github.com/Akku-rajput"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile
            </a>

            <a
              href="https://jocular-platypus-2e7a85.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio Website
            </a>

          </div>

          <p className="resume-location">
            Mohali, Punjab, India
          </p>

        </header>

        {/* SUMMARY */}

        <section className="resume-section">

          <h2>Professional Summary</h2>

          <p>
            Results-driven PHP and WordPress Developer
            with 6 years of professional experience in
            website development, customization and
            maintenance.

            Specialized in Core PHP, WordPress custom
            theme development, custom plugin development,
            Elementor and WooCommerce.

            Experienced in building and customizing
            responsive websites, developing website
            functionalities, integrating third-party
            services and troubleshooting technical issues.

            Also experienced in Shopify development,
            frontend technologies, website performance
            optimization and technical SEO fundamentals.

            Focused on delivering maintainable code,
            reliable functionality and user-friendly
            digital experiences.
          </p>

        </section>

        {/* TECHNICAL SKILLS */}

        <section className="resume-section">

          <h2>Technical Skills</h2>

          <div className="resume-skills">

            {skills.map((skill) => (
              <span key={skill}>
                {skill}
              </span>
            ))}

          </div>

        </section>

        {/* CORE EXPERTISE */}

        <section className="resume-section">

          <h2>Core Competencies</h2>

          <ul>
            {expertise.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

        </section>

        {/* PROJECTS */}

        <section className="resume-section">

          <h2>Selected Live Projects</h2>

          <div className="resume-projects">

            {projects.map((project) => (
              <div
                className="resume-project"
                key={project.name}
              >

                <strong>{project.name}</strong>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.url}
                </a>

              </div>
            ))}

          </div>

          <p className="resume-note">
            Selected websites from my professional
            project portfolio.
          </p>

        </section>

        {/* EDUCATION */}

        <section className="resume-section">

          <h2>Education</h2>

          <h3>B.Sc. in Computer Applications</h3>

        </section>

        {/* PRINT */}

        <div className="resume-actions">

          <button onClick={() => window.print()}>
            Download Resume / Save as PDF
          </button>

          <p>
            Choose "Save as PDF" in the print dialog.
          </p>

        </div>

      </div>

    </main>
  );
}

export default Resume;