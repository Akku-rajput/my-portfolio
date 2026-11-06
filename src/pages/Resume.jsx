
import "../assets/Portfolio.css";

function Resume() {
  const skills = [
    "WordPress Development",
    "Shopify Development",
    "PHP",
    "HTML5",
    "CSS3",
    "JavaScript",
    "jQuery",
    "React.js",
    "Website Speed Optimization",
    "Technical SEO",
    "Responsive Web Design",
    "E-commerce Development",
  ];

  const projects = [
    {
      name: "Bunzl Europe",
      url: "https://www.bunzl.eu/",
    },
    {
      name: "Tile R Tools",
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

  return (
    <div className="resume-page">

      {/* HEADER */}

      <div className="resume-header">
        <h1>Akanksha Singh</h1>

        <h3>
          Senior Web Developer | WordPress & Shopify Expert
        </h3>

        <p className="resume-skills-line">
          6+ Years of Professional Experience
        </p>

        <div className="personal-details">

          <p>
            <strong>Mobile:</strong>
            <a href="tel:+918299153078">
              +91 8299153078
            </a>
          </p>

          <p>
            <strong>Email:</strong>
            <a href="mailto:as0122592@gmail.com">
              as0122592@gmail.com
            </a>
          </p>

          <p>
            <strong>GitHub:</strong>
            <a
              href="https://github.com/Akku-rajput"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Akku-rajput
            </a>
          </p>

          <p>
            <strong>Portfolio:</strong>
            <a
              href="http://localhost:5173/"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Portfolio
            </a>
          </p>

          <p>
            <strong>Location:</strong>
            Mohali, Punjab, India
          </p>

        </div>
      </div>

      <hr />

      {/* PROFESSIONAL SUMMARY */}

      <section className="resume-section">
        <h2>Professional Summary</h2>

        <p>
          Results-driven Senior Web Developer with 6+
          years of professional experience in website
          development, customization and maintenance.

          Specialized in WordPress, Shopify and PHP
          development, with strong knowledge of HTML5,
          CSS3, JavaScript and jQuery.

          Experienced in developing responsive websites,
          e-commerce platforms, customizing themes,
          integrating website functionalities and
          maintaining existing web applications.

          Skilled in website speed optimization,
          performance improvements and technical SEO
          fundamentals, including website structure,
          indexing, crawlability and website performance.

          Passionate about building user-friendly,
          responsive and high-performance websites.
        </p>
      </section>

      {/* TECHNICAL SKILLS */}

      <section className="resume-section">
        <h2>Technical Skills</h2>

        <div className="resume-skills">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      {/* CORE EXPERTISE */}

      <section className="resume-section">
        <h2>Core Expertise</h2>

        <ul>
          <li>
            WordPress website development and
            custom theme development.
          </li>

          <li>
            Shopify store development and
            theme customization.
          </li>

          <li>
            PHP development and website customization.
          </li>

          <li>
            Website speed and performance optimization.
          </li>

          <li>
            Technical SEO and website structure
            optimization.
          </li>

          <li>
            Responsive website development for
            desktop, tablet and mobile devices.
          </li>

          <li>
            Website maintenance, troubleshooting
            and bug fixing.
          </li>

          <li>
            E-commerce development and
            functionality improvements.
          </li>

          <li>
            Frontend development using HTML,
            CSS, JavaScript and jQuery.
          </li>
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
      </section>

      {/* EDUCATION */}

      <section className="resume-section">
        <h2>Education</h2>

        <h3>B.Sc. in Computer Applications</h3>
      </section>

      {/* DOWNLOAD BUTTON */}

      <div className="resume-actions">
        <button onClick={() => window.print()}>
          Download Resume / Save as PDF
        </button>
      </div>

    </div>
  );
}

export default Resume;
