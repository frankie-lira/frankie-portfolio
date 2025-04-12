import ProjectCard from './ProjectCard';
import './Projects.css';

const projects = [
  {
    title: 'Adobe',
    image: '/images/adobe.jpg',
    year: '2024',
  },
  {
    title: 'Inclusive Interaction Lab at UC Merced',
    image: '/images/merced.jpg',
    year: '2024',
  },
  {
    title: 'CodePath.org',
    image: '/images/codepath.jpg',
    year: '2024',
  },
  {
    title: 'NeuroLeap',
    image: '/images/neuro.jpg',
    year: '2024',
  },
  {
    title: 'Delaget',
    image: '/images/delaget.jpg',
    year: '2024',
  },
  {
    title: 'Bay Area Rapid Transit (BART)',
    image: '/images/bart.jpg',
    year: '2024',
  },
];

function Projects() {
  return (
    <section
      id="projects"
      role="region"
      aria-labelledby="projects-heading"
    >
      <h2 id="projects-heading">Projects</h2>

      <div className="gallery">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>
    </section>
  );
}

export default Projects;