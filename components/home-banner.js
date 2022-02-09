import Container from './container';
import Image from 'next/image';
import { FiArrowDown } from 'react-icons/fi';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';

export default function HomeBanner() {
  return (
    <Container>
      <div className=" banner flex items-center justify-center flex-col min-h-screen">
        <h4 className="font-main font-bold font-gradient banner-title">
          Let's build the future
          <br />
          together!
        </h4>
        <span className="block text-xl text-desc">developing softwares...</span>

        <span className="icon-container pulse mt-4">
          <FiArrowDown />
        </span>
      </div>
    </Container>
  );
}
