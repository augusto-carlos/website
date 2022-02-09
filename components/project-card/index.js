import Image from 'next/image';
import { FiGithub, FiLink } from 'react-icons/fi';
import imgCard from '../../public/assets/images/card-img.png';

export default function ProjectCard({ image, platform, title, desc, tags }) {
  return (
    <div className="project-card">
      <picture>
        <Image src={imgCard} alt={title} />
        <div className="flex flex-row justify-between legend">
          <span className="platform">{platform}</span>
          <div className="tags">
            <span>flutter</span>
            <span>clean arch</span>
            <span>imdb</span>
          </div>
        </div>
      </picture>
      <div className="flex flex-row justify-between p-4">
        <h4 className="text-subtitle">Charlotte</h4>
        <div className="actions flex flex-row justify-between">
          <a href="https://github.com/augusto-carlos/insound" target="_blank">
            <FiLink />
            Preview
          </a>
          <a href="https://github.com/augusto-carlos/insound" target="_blank">
            <FiGithub />
            Code
          </a>
        </div>
      </div>
      <p className="p-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque alias
        nobis rem minima accusamus itaque ut vitae, quam libero culpa.
      </p>
    </div>
  );
}
