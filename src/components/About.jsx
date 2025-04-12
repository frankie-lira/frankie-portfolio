import './About.css';

function About() {
  return (
    <section
      className="about-container"
      id="about"
      role="region"
      aria-labelledby="about-heading"
    >
      <div className="about-top">
        <div className="about-photo">
          <img
            src="/images/francisco.jpg"
            alt="Francisco smiling in front of a waterfall"
            width="200"
            height="200"
          />
        </div>
        <div className="about-text">
          <h2 id="about-heading">About Me</h2>
          <p>
            I'm Francisco — a Product Manager who started off in mobile dev, stumbled into accessibility, and now leads strategy
            and compliance work at Adobe. I like to think of myself as a practical idealist with a healthy skepticism of anything labeled “disruptive.”
          </p>
          <p>
            I focus on building inclusive products that serve people usually left out of the conversation. Outside of work,
            you'll find me cooking too much food for one person, hiking with questionable shoes, or spinning up another accessibility side project.
          </p>
        </div>
      </div>

      <div className="about-sections">
        <section role="region" aria-labelledby="education-heading">
          <h3 id="education-heading">Education</h3>
          <p>
            <strong>University of California, Merced</strong><br />
            B.S. in Computer Science & Engineering<br />
            Minor in Applied Mathematics<br />
            <em>Graduated Dec 2022</em>
          </p>
        </section>

        <section role="region" aria-labelledby="experience-heading">
          <h3 id="experience-heading">Experience</h3>
          <ul>
            <li>
              <strong>Adobe</strong> — Accessibility PM (2023–Present)
            </li>
            <li>
              <strong>Inclusive Interaction Lab</strong> — Student Researcher (2022–2023)
            </li>
            <li>
              <strong>BART</strong> — Front-End Developer Intern (2021)
            </li>
            <li>
              <strong>Hack Merced</strong> — Media & Marketing Chair (2021–Present)
            </li>
          </ul>
        </section>

        <section role="region" aria-labelledby="skills-heading">
          <h3 id="skills-heading">Skills</h3>
          <ul className="skills-list">
            <li>Accessibility</li>
            <li>Inclusive Design</li>
            <li>Product Strategy</li>
            <li>User Research</li>
            <li>React</li>
            <li>Swift</li>
            <li>Git</li>
            <li>Public Speaking</li>
          </ul>
        </section>
      </div>
      
      <div className="resume-link">
        <a href="/resume.pdf" download>
        Download My Resume (PDF)
        </a>
      </div>
    </section>
  );
}

export default About;