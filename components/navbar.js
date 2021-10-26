import Container from './Container';
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiTwitter, FiMoon } from 'react-icons/fi';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';

export default function NavBar() {
  return (
    <div className="fixed z-50 w-screen">
      <Container>
        <nav className="flex-col md:flex-row flex items-center md:justify-between my-6">
          <h1 className="font-overpass text-4xl font-bold tracking-tighter leading-tight md:pr-8">
            Augusto da Silva
          </h1>
          <ul className="flex flex-row text-center my-4 md:0 text-lg md:pl-8">
            <li class="ml-4">
              <Link href="#about">About</Link>
            </li>
            <li class="ml-4">
              <Link href="#projects">Projects</Link>
            </li>
            <li class="ml-4">
              <Link href="#blog">Blog</Link>
            </li>
          </ul>
          <ul className="flex flex-row items-center text-center md:text-left text-lg md:pl-8">
            <li class="ml-4">
              <FiGithub />
            </li>
            <li class="ml-4">
              <FiTwitter />
            </li>
            <li class="ml-4">
              <FiLinkedin />
            </li>
            <li class="ml-6">
              <RiSunFill color="#f1e473" size="24" />
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
}
