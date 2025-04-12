import './ProjectCard.css';

function ProjectCard({ title, image, video, year }) {
  const id = title.replace(/\s+/g, '-').toLowerCase(); // For unique IDs
  
    return (
      <article
        className="project-card"
        tabIndex={0}
        role="group"
        aria-labelledby={`${id}-title`}
        aria-describedby={`${id}-desc`}
      >
        {video ? (
        <video
          src={video}
          muted
          autoPlay
          loop
          playsInline
          className="project-media"
          aria-hidden="true"
        />
      ) : (
        <img src={image} alt={`Thumbnail of ${title}`} className="project-media" />
      )}
      <h3 id={`${id}-title`}>{title}</h3>
      <p id={`${id}-desc`}>{year}</p>
      </article>
    );
  }
  
  export default ProjectCard;