import './ProjectCard.css';

function ProjectCard({ title, image, year }) {
    const id = title.replace(/\s+/g, '-').toLowerCase(); // For unique IDs
  
    return (
      <article
        className="project-card"
        tabIndex={0}
        role="group"
        aria-labelledby={`${id}-title`}
        aria-describedby={`${id}-desc`}
      >
        <img src={image} alt={`Thumbnail of ${title}`} />
        <h3 id={`${id}-title`}>{title}</h3>
        <p id={`${id}-desc`}>{year}</p>
      </article>
    );
  }
  
  export default ProjectCard;