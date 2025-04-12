import './About.css';

function About() {
  return (
    <section
      className="about-container"
      id="about"
      role="region"
      aria-labelledby="about-heading"
    >
      <h2 id="about-heading">About Me</h2>

      <div className="about-text-wrapper">
        <img
          className="about-float-image"
          src="/images/AIFrankie.jpg"
          alt="Francisco holding a banana while an AI mislabels him as 94% banana, highlighting Francisco with a green bounding box and assigning 0% to the actual banana with a red bounding box."
        />

        <p>
          I'm Francisco — a Product Manager who started off in mobile dev, stumbled into accessibility, and now leads strategy and
          compliance work at Adobe. I like to think of myself as a practical idealist with a healthy skepticism of anything labeled
          “disruptive.”
        </p>
        <p>
          Lately, I’ve been exploring AI — leading internal initiatives at Adobe, building personal projects, and attending the
          occasional hackathon to see what actually works beyond the slide decks. I’m especially interested in where AI creates real
          value and ships features that solve real problems, not just synthetic ones.
        </p>
        <p>
          I focus on designing inclusive products that prioritize users often overlooked in the tech space. Outside of work, I like to
          exercise my creative muscles and maintain balance by hiking in questionable footwear, ignoring recipe instructions, or
          launching yet another accessibility side project.
        </p>
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
          <p>
            <strong>CodePath.org</strong><br />
            HONORS Intermediate iOS Mobile Development
          </p>
          <p>
            <strong>CodePath.org</strong><br />
            HONORS Advanced Web Development
          </p>
        </section>

        <section role="region" aria-labelledby="experience-heading">
          <h3 id="experience-heading">Experience</h3>
          <ul>
            <li><strong>Adobe</strong> — Accessibility PM (2023–Present)</li>
            <li><strong>Inclusive Interaction Lab</strong> — Student Researcher (2022–2023)</li>
            <li><strong>BART</strong> — Front-End Developer Intern (2021)</li>
            <li><strong>Hack Merced</strong> — Media & Marketing Chair (2021–Present)</li>
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
        <a href="/resume.pdf" download>Download My Resume (PDF)</a>
      </div>
    </section>
  );
}

export default About;