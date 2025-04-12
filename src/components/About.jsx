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
  I'm Francisco Lira — a Product Manager who began as a mobile software engineer, stumbled into accessibility, and now leads strategy and compliance efforts at Adobe. I'm currently part of Adobe’s Ethical Innovation team, where I help drive accessibility across Photoshop, Lightroom, Stock, and Content Credentials. I like to think of myself as a practical idealist with a healthy skepticism of anything labeled “disruptive.”
</p>

<p>
  Recently, I’ve been diving into AI — leading internal initiatives at Adobe, building personal projects, and attending AI hackathons to see what actually works beyond the slide decks. I'm especially interested in where AI delivers real value and solves real problems, not just generates synthetic ones.
</p>

<p>
  I focus on designing inclusive products that prioritize users often overlooked in the tech space. Outside of work, I like to exercise my creative muscles and maintain balance by hiking in questionable footwear, ignoring recipe instructions, or hacking up another side project.
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
            <p><strong>Adobe</strong> — Accessibility PM (2023–Present)</p>
            <p><strong>Inclusive Interaction Lab</strong> — Student Researcher (2022–2023)</p>
            <p><strong>BART</strong> — Front-End Developer Intern (2021)</p>
            <p><strong>Hack Merced</strong> — Media & Marketing Chair (2021–Present)</p>
        </section>

        <section role="region" aria-labelledby="skills-heading">
        <h3 id="skills-heading">Skills</h3>
  <div className="skills-list" role="list">
    <span role="listitem">Accessibility</span>
    <span role="listitem">Inclusive Design</span>
    <span role="listitem">Product Strategy</span>
    <span role="listitem">User Research</span>
    <span role="listitem">React</span>
    <span role="listitem">Swift</span>
    <span role="listitem">Git</span>
    <span role="listitem">Public Speaking</span>
  </div>
        </section>
      </div>

      <div className="resume-link">
        <a href="/resume.pdf" download>Download My Resume (PDF)</a>
      </div>
    </section>
  );
}

export default About;