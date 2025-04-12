import ProjectCard from './ProjectCard';
import './Projects.css';


const projects = [
  {
    id: 'braille-keyboard',
    title: 'HCI Braille Keyboard',
    video: '/videos/PhoneTouchVid.mp4',
    year: '2024',
    description: 'A project building a braille input system for low-vision users on smartphones.'
  },
  {
    id: 'inclusive-lab',
    title: 'Inclusive Interaction Lab at UC Merced',
    image: '/images/ColorSpectrum.jpg',
    year: '2024',
    description: 'Research work on accessibility tools for underrepresented groups.'
  },
  {
    id: 'codepath',
    title: 'CodePath.org',
    image: '/images/codepath.jpg',
    year: '2024',
    description: 'Completed the iOS and web development honors programs.'
  },
  {
    id: 'neuroleap',
    title: 'NeuroLeap',
    image: '/images/ColorSpectrum.jpg',
    year: '2024',
    description: 'Built a mobile neurofeedback app.'
  },
  {
    id: 'delaget',
    title: 'Delaget',
    image: '/images/delaget.jpg',
    year: '2024',
    description: 'Worked on frontend dashboards for restaurant data analysis.'
  },
  {
    id: 'bart',
    title: 'Bay Area Rapid Transit (BART)',
    image: '/images/bart.jpg',
    year: '2024',
    description: 'Internship focused on improving accessibility in public transportation systems.'
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