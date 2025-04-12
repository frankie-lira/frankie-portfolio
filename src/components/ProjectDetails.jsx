import { useParams } from "react-router-dom";
import projects from "./projectData";
import "./Projects.css"; // or create a new one: ProjectDetails.css
import "./ProjectDetails.css"; // or create a new one: ProjectDetails.css
function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <section className="project-details">
        <h2>Project not found</h2>
        <p>Sorry, we couldn’t find that project. Try going back to the projects page.</p>
      </section>
    );
  }

  return (
    <section
      className="project-details"
      role="region"
      aria-labelledby="project-title"
    >
      <h2 id="project-title" className="project-details-title">{project.title}</h2>

      <div className="project-media-wrapper">
        {project.video ? (
          <video
            src={project.video}
            controls
            className="project-media"
            aria-label={`${project.title} demo video`}
          />
        ) : (
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            className="project-media"
          />
        )}
      </div>

      <div className="project-meta">
        <p><strong>Year:</strong> {project.year}</p>
        <p>{project.description}</p>
      </div>
    </section>
  );
}

export default ProjectDetails;