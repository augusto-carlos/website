import Container from './container';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';

export default function NavBar() {
  return (
    <div className="sticky top-0 z-40 w-full bg-blur flex-none lg:z-50">
      <Container>
        <nav className="flex-col md:flex-row flex items-center md:justify-between">
          <h1 className="font-main text-2xl font-bold tracking-tighter leading-tight md:pr-8 m-3 sm:m-0">
            Carlos.dev
          </h1>
          <ul className="flex flex-row text-center my-4 md:0 md:pl-8">
            <li className="ml-4">
              <a href="#about">About</a>
            </li>
            <li className="ml-4">
              <a href="#services">Services</a>
            </li>
            <li className="ml-4">
              <a href="#projects">Projects</a>
            </li>

            <li className="ml-4">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <ul className="flex flex-row items-center text-center md:text-left text-lg md:pl-8">
            <a
              target="_blank"
              href="https://github.com/augusto-carlos"
              className="ml-4"
            >
              <FiGithub />
            </a>
            <a
              target="_blank"
              href="https://twitter.com/carllos_4"
              className="ml-4"
            >
              <FiTwitter />
            </a>
            <a
              target="_blank"
              href="https://linkedin.com/in/augusto-carlos96/"
              className="ml-4"
            >
              <FiLinkedin />
            </a>
            <span className="ml-6">
              <RiSunFill color="#f1e473" size="24" />
            </span>
          </ul>
        </nav>
      </Container>
    </div>
  );
}
