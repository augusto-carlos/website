import imgProject from '../../public/assets/images/card-image.png';
import Container from '../container';
import ProjectCard from '../project-card';

export default function Projects() {
  return (
    <Container>
      <div
        id="projects"
        className="flex flex-wrap items-center justify-around min-h-screen"
      >
        <ProjectCard title="tsdfe" platform="android" />
      </div>
    </Container>
  );
}
