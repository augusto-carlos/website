import Image from 'next/image';
import { FiGithub, FiLink } from 'react-icons/fi';

// interface ProjectModel{
//   image:string
//   :string
//   desc:string
//   platform:string
//   tags:string[]
// }

export default function ProjectCard({
  image,
  platform,
  icon,
  title,
  desc,
  githubLink,
  previewLink,
}) {
  return (
    <div>
      <picture>
        <Image src={image} alt={title} width={100} />
      </picture>

      <div className="flex flex-row justify-between p-4">
        <section className="flex flex-row">
          <Image src={icon} alt={`${title} logo`} className="project-icon" />
          <div className="flex flex-col pl-4">
            <h4 className="font-bold text-3xl">{title}</h4>
            <p className="pt-3">{desc}</p>
            <div className="actions flex flex-row justify-start">
              <a href={previewLink} target="_blank">
                <FiLink />
              </a>
              <a href={githubLink} target="_blank">
                <FiGithub />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
