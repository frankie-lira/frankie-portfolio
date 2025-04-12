import { Link } from 'react-router-dom';
import './ProjectCard.css';

function ProjectCard({ id, title, image, video, year }) {
  const url = `/projects/${id}`;

  return (
    <Link to={url} className="project-card-link">
      <article className="project-card" tabIndex={0}>
        {video ? (
          <video src={video} muted autoPlay loop playsInline className="project-media" />
        ) : (
          <img src={image} alt={`Thumbnail of ${title}`} className="project-media" />
        )}
        <h3>{title}</h3>
        <p>{year}</p>
      </article>
    </Link>
  );
}

export default ProjectCard;