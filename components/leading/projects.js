import imgProject from '../../public/assets/images/insound.png';
import icon from '../../public/assets/images/insound-icon.png';
import Container from '../container';
import ProjectCard from '../project-card';

export default function Projects() {
  return (
    <Container>
      <div
        id="projects"
        className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-3 min-h-screen"
      >
        <ProjectCard
          title="insound"
          platform="frontend"
          desc="Stream, favorite and download your musics and podcasts"
          image={imgProject}
          icon={icon}
          previewLink="https://github.com/augusto-carlos/insound"
          githubLink="https://github.com/augusto-carlos/insound"
        />
      </div>
    </Container>
  );
}
